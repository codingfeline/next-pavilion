import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  test('renders heading', () => {
    render(<Home />)
    const el = screen.getByRole('heading', { name: /authent/i })
    expect(el).toBeDefined()
  })
  test('renders telephone#', () => {
    render(<Home />)
    const el = screen.getByText(/01304 367 707/i)
    expect(el).toBeDefined()
  })
})
