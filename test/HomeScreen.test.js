import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { print } from 'graphql/language/printer'
import {MockedProvider} from 'react-apollo/test-utils'
// import { addTypenameToDocument } from 'apollo-utilities'
Enzyme.configure({ adapter: new Adapter() })

import {HOME_QUERY, withHome, HomeScreen} from '../src/renderer/screens/HomeScreen'
import {
  home_full,
  home_no_items,
} from './__mocks__/data'

// const query = addTypenameToDocument(HOME_QUERY)
const query = HOME_QUERY

describe('HomeScreen', () => {

  test('has a known query shape', () => {
    expect(print(HOME_QUERY)).toMatchSnapshot()
  })

  test('has a loading state', done => {
    class Container extends React.Component {
      componentWillMount() {
        expect(this.props.loading).toBe(true)
      }
      componentWillReceiveProps(next) {
        expect(next.loading).toBe(false)
        done()
      }
      render() {
        return null
      }
    }

    const ContainerWithData = withHome(Container)
    const mocks = [
      {
        request: { query },
        result: { data: { home: home_full } },
      },
    ]
    renderer.create(
      <MockedProvider mocks={mocks}>
        <ContainerWithData />
      </MockedProvider>,
    )
  })

  describe('Component', () => {
    test('handles loading state', () => {
      const output = renderer.create(<HomeScreen loading />);
      expect(output.toJSON()).toMatchSnapshot();
    })
    test('returns markup', () => {
      const output = renderer.create(<HomeScreen home={home_full} />);
      expect(output.toJSON()).toMatchSnapshot();
    })
    test('returns markup when no items', () => {
      const output = renderer.create(<HomeScreen home={home_no_items} />);
      expect(output.toJSON()).toMatchSnapshot();
    })
  })

})
