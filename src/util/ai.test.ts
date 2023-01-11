import { CellState } from "@type/game"
import { getEasyMoveIndex, getHardMoveIndex, getMidMoveIndex } from "./ai"
import { getWinningMoveIndex } from "./game"

describe("getEasyMoveIndex()", () => {
  it("should return a valid index of an empty cell", async () => {
    const currentCellsState = [
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.X,
      CellState.O,
    ]

    const index = await getEasyMoveIndex(currentCellsState)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(currentCellsState.length)
    expect(currentCellsState[index]).toBe(CellState.Empty)
  })
})

describe("getMidMoveIndex()", () => {
  it("should return a valid index of an empty cell or the index of a winning move", async () => {
    const currentCellsState = [
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.X,
      CellState.O,
    ]
    const winningMoveIndex = getWinningMoveIndex(currentCellsState)
    const index = await getMidMoveIndex(currentCellsState)
    if (winningMoveIndex !== -1) {
      expect(index).toBe(winningMoveIndex)
    } else {
      expect(index).toBeGreaterThanOrEqual(0)
      expect(index).toBeLessThan(currentCellsState.length)
      expect(currentCellsState[index]).toBe(CellState.Empty)
    }
  })
})

describe("getHardMoveIndex()", () => {
  // TODO: Update
  it("should return a valid index of an empty cell", async () => {
    const currentCellsState = [
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.X,
      CellState.O,
    ]

    const index = await getHardMoveIndex(currentCellsState)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(currentCellsState.length)
    expect(currentCellsState[index]).toBe(CellState.Empty)
  })
})
