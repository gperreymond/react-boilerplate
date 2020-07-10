import React from 'react'
import { render } from 'enzyme'

import App from './App'

describe('<App />', () => {
  const componant = render(<App />)
  test('should match snapshot', () => {
    expect(componant.html()).toMatchSnapshot()
  })
})
