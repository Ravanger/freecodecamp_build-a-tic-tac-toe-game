import { render, screen } from "@testing-library/react"
import { CellState } from "@type/game"
import Board from "./Board"

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
    expect(cellButtons[0]?.textContent).toBe(CellState.X)
    expect(cellButtons[1]?.textContent).toBe(CellState.O)
    expect(cellButtons[2]?.textContent).toBe(CellState.X)
    expect(cellButtons[3]?.textContent).toBe(CellState.Empty)
    expect(cellButtons[4]?.textContent).toBe(CellState.O)
    expect(cellButtons[5]?.textContent).toBe(CellState.Empty)
    expect(cellButtons[6]?.textContent).toBe(CellState.Empty)
    expect(cellButtons[7]?.textContent).toBe(CellState.Empty)
    expect(cellButtons[8]?.textContent).toBe(CellState.Empty)
  })
})
