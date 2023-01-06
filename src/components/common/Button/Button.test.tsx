import { render, screen } from "@testing-library/react"
import Button from "./Button"

describe("Button component", () => {
  const buttonText = "Click me"
  const fn = vi.fn()

  beforeEach(() => {
    render(<Button handleClick={fn}>{buttonText}</Button>)
  })

  it("should render a button with the correct text content", () => {
    const button = screen.getByText(buttonText)
    expect(button).toBeDefined()
    expect(button.textContent).toBe(buttonText)
  })

  it("calls the handleClick function when the button is clicked", () => {
    const button = screen.getByText(buttonText)
    button.click()
    expect(fn).toHaveBeenCalledOnce()
    button.click()
    expect(fn).toHaveBeenCalledTimes(2)
  })
})
