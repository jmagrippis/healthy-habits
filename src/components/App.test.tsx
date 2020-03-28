import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

test('renders', () => {
  const { getByText } = render(<App />)
  const header = getByText(/healthy habits/i)
  expect(header).toBeInTheDocument()
})
