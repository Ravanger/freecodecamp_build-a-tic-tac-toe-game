import { CellState } from "@type/game"
import { getEasyMoveIndex, getHardMoveIndex, getMidMoveIndex } from "./ai"
import { getWinningMoveIndex } from "./game"

// [ , X, O]
// [X, O, X]
// [X,  ,  ]
const winningCellsState = [
  CellState.Empty,
  CellState.X,
  CellState.O,
  CellState.X,
  CellState.O,
  CellState.X,
  CellState.X,
  CellState.Empty,
  CellState.Empty,
]

// [X, O, X]
// [ ,  ,  ]
// [ ,  ,  ]
const notWinningCellsState = [
  CellState.X,
  CellState.O,
  CellState.X,
  CellState.Empty,
  CellState.Empty,
  CellState.Empty,
  CellState.Empty,
  CellState.Empty,
  CellState.Empty,
]

describe("getEasyMoveIndex()", () => {
  it("should return a valid index of an empty cell", async () => {
    const index = await getEasyMoveIndex(winningCellsState)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(winningCellsState.length)
    expect(winningCellsState[index]).toBe(CellState.Empty)
  })
})

describe("getMidMoveIndex()", () => {
  vi.spyOn(Math, "random")
    .mockImplementationOnce(() => 0) // Delay
    .mockImplementationOnce(() => 0) // First index
    .mockImplementationOnce(() => 0) // shouldMakeWinningMove = true

  it("should return a valid index of an empty cell or the index of a winning move", async () => {
    const winningMoveIndex = getWinningMoveIndex(winningCellsState)
    expect(winningMoveIndex).toBe(0)
    const index = await getMidMoveIndex(winningCellsState)
    if (winningMoveIndex !== -1) {
      expect(index).toBe(winningMoveIndex)
    } else {
      expect(index).toBeGreaterThanOrEqual(0)
      expect(index).toBeLessThan(winningCellsState.length)
      expect(winningCellsState[index]).toBe(CellState.Empty)
    }
  })

  it("should return a valid index of an empty cell, non winning move", async () => {
    const winningMoveIndex = getWinningMoveIndex(notWinningCellsState)
    expect(winningMoveIndex).toBe(-1)
    const index = await getMidMoveIndex(notWinningCellsState)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(notWinningCellsState.length)
    expect(notWinningCellsState[index]).toBe(CellState.Empty)
  })
})

describe("getHardMoveIndex()", () => {
  // TODO: Update
  it("should return a valid index of an empty cell", async () => {
    const index = await getHardMoveIndex(winningCellsState)
    expect(index).toBeGreaterThanOrEqual(0)
    expect(index).toBeLessThan(winningCellsState.length)
    expect(winningCellsState[index]).toBe(CellState.Empty)
  })
})
