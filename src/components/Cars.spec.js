import React from 'react'
import { shallow } from 'enzyme'
import Cars from './Cars'

const setup = props => {
  const component = shallow(
    <Cars title={props.title}>{props.children}</Cars>
  )

  return {
    component: component,
    children: component.children().at(1),
    h3: component.find('h3')
  }
}

describe('CarsList component', () => {
  it('should render title', () => {
    const { h3 } = setup({ title: 'Test Cars' })
    expect(h3.text()).toMatch(/^Test Cars$/)
  })

  it('should render children', () => {
    const { children } = setup({ title: 'Test Cars', children: 'Test Children' })
    expect(children.text()).toMatch(/^Test Children$/)
  })
})
