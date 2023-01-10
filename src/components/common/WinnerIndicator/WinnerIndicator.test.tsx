import { CellState } from "@type/game"
import { winner } from "@store/game"
import { render, screen } from "@testing-library/react"
import WinnerIndicator from "./WinnerIndicator"

describe("WinnerIndicator component", () => {
  it("should display ? if no winner, by default", () => {
    render(<WinnerIndicator />)
    const element = screen.getByText(`Winner: ?`)
    expect(element).toBeDefined()
  })

  it("should set the current winner to X and display the correct text", () => {
    winner.set(CellState.X)
    render(<WinnerIndicator />)
    const element = screen.getByText(`Winner: ${CellState.X}`)
    expect(element).toBeDefined()
  })
})
