import React from 'react'
// import { describe, it, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../pages'

describe('Home', () => {
  test('renders home elements', () => {
    render(<Home />)
    const linkElement = screen.getByText(/authent/i)
    expect(linkElement).toBeDefined()
  })
})
