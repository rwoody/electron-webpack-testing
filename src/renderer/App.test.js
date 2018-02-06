import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {App} from './App'

Enzyme.configure({ adapter: new Adapter() })

test('App renders correctly', () => {
  const app = shallow(<App />)
  expect(app.text()).toEqual('Hello from React')
})