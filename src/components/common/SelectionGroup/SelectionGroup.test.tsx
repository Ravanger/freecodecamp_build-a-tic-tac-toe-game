import { render, screen, act } from "@testing-library/react"
import SelectionGroup from "./SelectionGroup"

describe("SelectionGroup component", () => {
  const values = ["Option 1", "Option 2", "Option 3"]
  const selectedValue = values[0]!
  const titleText = "Test Group"
  const handleClick = vi.fn()

  it("renders a title and buttons for each value", () => {
    render(
      <SelectionGroup
        values={values}
        title={titleText}
        selected={selectedValue}
        handleClick={handleClick}
      />
    )

    const titleElement = screen.getByText(titleText)
    expect(titleElement).toBeDefined()

    values.forEach((value) => {
      const button = screen.getByText(value)
      expect(button).toBeDefined()
    })
  })

  it("invokes the correct handleClick function when a button is clicked", () => {
    render(
      <SelectionGroup
        values={values}
        title={titleText}
        selected={selectedValue}
        handleClick={handleClick}
      />
    )

    const option1Button = screen.getByText(selectedValue)
    act(() => {
      option1Button.click()
    })
    expect(handleClick).toHaveBeenCalledTimes(1)
    expect(handleClick).toHaveBeenCalledWith(selectedValue)
  })

  it("disables the buttons if the disabled prop is true", () => {
    render(
      <SelectionGroup
        values={values}
        title={titleText}
        selected={selectedValue}
        handleClick={handleClick}
        disabled
      />
    )

    const option1Button = screen.getAllByText(/option/i, { exact: false })
    for (const button of option1Button) {
      expect(button).toHaveProperty("disabled", true)
    }
  })
})
