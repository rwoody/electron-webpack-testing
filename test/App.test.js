import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {MemoryRouter} from 'react-router-dom'
import {App} from '../src/renderer/App'
import {HomeScreen} from '../src/renderer/HomeScreen'
import {LoginScreen} from '../src/renderer/LoginScreen'

Enzyme.configure({ adapter: new Adapter() })

test(`App renders '/' correctly`, () => {
  const wrapper = mount(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  )
  const home = wrapper.find(HomeScreen)
  expect(home.text()).toEqual('Hello from HomeScreen')
})

test(`App renders '/login' correctly`, () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  )
  const login = wrapper.find(LoginScreen)
  expect(login.text()).toEqual('Hello from LoginScreen')
})