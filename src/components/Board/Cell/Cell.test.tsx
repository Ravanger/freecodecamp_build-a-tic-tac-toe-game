import Cell from "./Cell"
import { CellState } from "@type/game"
import { render, screen } from "@testing-library/react"

describe("Cell component", () => {
  beforeEach(() => {
    render(<Cell state={CellState.Empty} />)
  })

  it("should render an empty cell", () => {
    const cell = screen.getByRole("button")
    expect(cell).toBeDefined()
    expect(cell.textContent).toBe(CellState.Empty)
  })
})
