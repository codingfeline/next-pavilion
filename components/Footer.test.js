import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  test('renders footer elements', () => {
    render(<Footer />)
    const linkElement = screen.getByText(/© 2023/i)
    expect(linkElement).toBeDefined()
  })
})
