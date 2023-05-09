import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

describe('Navbar', () => {
  test('renders links', () => {
    render(<Navbar />)
    const linkElement = screen.getByText(/togglemenu/i)
    expect(linkElement).toBeDefined()
  })
})
