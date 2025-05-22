import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App Component', () => {
  test('renders Vite + React heading', () => {
    render(<App />)
    expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument()
  })

  test('renders count button and clicks', () => {
    render(<App />)
    const button = screen.getByRole('button')
    expect(button).toHaveTextContent(/count is 0/i)

    // Optional: simulate click if you install user-event
    // fireEvent.click(button) or userEvent.click(button)
  })
})

