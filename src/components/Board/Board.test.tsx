import { render, screen } from "@testing-library/react"
import Board from "./Board"
import { CellState } from "./Cell/Cell.types"

describe("Board component", () => {
  beforeEach(() => {
    const board = [
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.Empty,
      CellState.Empty,
      CellState.Empty,
    ]
    const mockFn = vi.fn()
    render(<Board cellsState={board} handleCellClick={mockFn} />)
  })

  it("should render a grid of 9 Cell components", () => {
    const cellButtons = screen.getAllByRole("button")
    expect(cellButtons).toHaveLength(9)
  })

  it("should display the correct content in each cell", () => {
    const cellButtons = screen.getAllByRole("button")
    expect(cellButtons[0]?.textContent).toBe("X")
    expect(cellButtons[1]?.textContent).toBe("O")
    expect(cellButtons[2]?.textContent).toBe("X")
    expect(cellButtons[3]?.textContent).toBe("")
    expect(cellButtons[4]?.textContent).toBe("O")
    expect(cellButtons[5]?.textContent).toBe("")
    expect(cellButtons[6]?.textContent).toBe("")
    expect(cellButtons[7]?.textContent).toBe("")
    expect(cellButtons[8]?.textContent).toBe("")
  })
})
