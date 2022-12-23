import { render, screen } from "@testing-library/react"
import Spacer from "./Spacer"
import { SPACER_TYPES } from "./Spacer.types"

describe("Spacer component", () => {
  it("renders a default, vertical spacer element with 1rem width", () => {
    render(<Spacer />)
    const element = screen.getByRole("separator")
    expect(element).toBeDefined()
    const styles = getComputedStyle(element)
    expect(styles.height).toBe("1rem")
    expect(styles.width).not.toBe("1rem")
  })

  it("renders a horizontal spacer element with the correct width and height", () => {
    render(<Spacer size="2rem" axis={SPACER_TYPES.HORIZONTAL} />)
    const element = screen.getByRole("separator")
    expect(element).toBeDefined()
    const styles = getComputedStyle(element)
    expect(styles.width).toBe("2rem")
    expect(styles.height).not.toBe("2rem")
  })

  it("renders a vertical spacer element with the correct width and height", () => {
    render(<Spacer size="2rem" axis={SPACER_TYPES.VERTICAL} />)
    const element = screen.getByRole("separator")
    expect(element).toBeDefined()
    const styles = getComputedStyle(element)
    expect(styles.height).toBe("2rem")
    expect(styles.width).not.toBe("2rem")
  })
})
