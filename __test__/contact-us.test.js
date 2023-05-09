import React from 'react'
import { render, screen } from '@testing-library/react'
import ContactUs from '@/pages/contact-us'

describe('Contact Us', () => {
  test('renders heading', () => {
    render(<ContactUs />)
    const el = screen.getByRole('heading', {
      name: 'ContactUs',
    })
    expect(el).toBeInTheDocument()
  })
  test('renders name textbox', () => {
    render(<ContactUs />)
    const el = screen.getByRole('textbox', {
      name: /name/i,
    })
    expect(el).toBeInTheDocument()
  })
  test('renders email textbox', () => {
    render(<ContactUs />)
    const el = screen.getByRole('textbox', {
      name: 'Email',
    })
    expect(el).toBeInTheDocument()
  })
  test('renders message textbox', () => {
    render(<ContactUs />)
    const el = screen.getByRole('textbox', {
      name: 'Message',
    })
    expect(el).toBeInTheDocument()
  })
})
