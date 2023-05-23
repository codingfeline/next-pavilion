import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  render(<Navbar />)
  test('renders toggleMenu', () => {
    const linkElement = screen.getByText(/togglemenu/i)
    expect(linkElement).toBeInTheDocument()
  })
  test('renders list', () => {
    render(<Navbar />)
    const linkElement = screen.queryAllByText(/menu/i)
    expect(linkElement).toBeInTheDocument()
  })
})
