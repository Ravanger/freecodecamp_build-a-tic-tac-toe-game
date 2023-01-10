import { checkForTie, checkForWinner } from "./game"
import { CellState } from "@type/game"

describe("checkForWinner", () => {
  it("should return true if there is a row of Xs", () => {
    const board = [
      CellState.X,
      CellState.X,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.Empty,
      CellState.Empty,
      CellState.Empty,
    ]
    expect(checkForWinner(board)).toBe(true)
  })

  it("should return true if there is a column of Os", () => {
    const board = [
      CellState.O,
      CellState.Empty,
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.Empty,
    ]
    expect(checkForWinner(board)).toBe(true)
  })

  it("should return true if there is a diagonal of Xs", () => {
    const board = [
      CellState.X,
      CellState.Empty,
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.X,
    ]
    expect(checkForWinner(board)).toBe(true)
  })

  it("should return false if there is no winner", () => {
    const board = [
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
    ]
    expect(checkForWinner(board)).toBe(false)
  })
})

describe("checkForTie", () => {
  it("should return true if the board is full and there is no winner", () => {
    const board = [
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
    ]
    expect(checkForTie(board)).toBe(true)
  })

  it("should return false if there is an empty cell on the board", () => {
    const board = [
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
    ]
    expect(checkForTie(board)).toBe(false)
  })
})
