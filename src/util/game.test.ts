import { checkForTie, checkForWinner, getWinningMoveIndex } from "./game"
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

  it("should return true if there is a diagonal of Xs, top-left to bottom-right", () => {
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

  it("should return true if there is a diagonal of Os, top-right to bottom-left", () => {
    const board = [
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.O,
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

describe("getWinningMoveIndex()", () => {
  it("should return the index of the first empty cell in a winning row", () => {
    const board = [
      CellState.Empty,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(0)
  })

  it("should return the index of the second empty cell in a winning row", () => {
    const board = [
      CellState.X,
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(1)
  })

  it("should return the index of the last empty cell in a winning row", () => {
    const board = [
      CellState.X,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(2)
  })

  it("should return the index of the first empty cell in a winning column", () => {
    const board = [
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(0)
  })

  it("should return the index of the second empty cell in a winning column", () => {
    const board = [
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(3)
  })

  it("should return the index of the last empty cell in a winning column", () => {
    const board = [
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(6)
  })

  it("should return the index of the first empty cell in the winning diagonal (top-left to bottom-right)", () => {
    // [ , O, X]
    // [O, X, O]
    // [ , O, X]
    const board = [
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(0)
  })

  it("should return the index of the second empty cell in the winning diagonal (top-left to bottom-right)", () => {
    // [X, X, O]
    // [ ,  , O]
    // [ , O, X]
    const board = [
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.O,
      CellState.X,
    ]
    expect(getWinningMoveIndex(board)).toBe(4)
  })

  it("should return the index of the last empty cell in the winning diagonal (top-left to bottom-right)", () => {
    // [X, O, X]
    // [ , X, O]
    // [ , O,  ]
    const board = [
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
    ]
    expect(getWinningMoveIndex(board)).toBe(8)
  })

  it("should return the index of the first empty cell in the winning diagonal (top-right to bottom-left)", () => {
    // [ , O,  ]
    // [ , X, O]
    // [X, O,  ]
    const board = [
      CellState.Empty,
      CellState.O,
      CellState.Empty,
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.Empty,
    ]
    expect(getWinningMoveIndex(board)).toBe(2)
  })

  it("should return the index of the second empty cell in the winning diagonal (top-right to bottom-left)", () => {
    // [O,  , X]
    // [ ,  , O]
    // [X, O,  ]
    const board = [
      CellState.O,
      CellState.Empty,
      CellState.X,
      CellState.Empty,
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.Empty,
    ]
    expect(getWinningMoveIndex(board)).toBe(4)
  })

  it("should return the index of the last empty cell in the winning diagonal (top-right to bottom-left)", () => {
    // [ , O, X]
    // [ , X, O]
    // [ , O,  ]
    const board = [
      CellState.Empty,
      CellState.O,
      CellState.X,
      CellState.Empty,
      CellState.X,
      CellState.O,
      CellState.Empty,
      CellState.O,
      CellState.Empty,
    ]
    expect(getWinningMoveIndex(board)).toBe(6)
  })

  it("should return -1 if there is no winning move", () => {
    const board = [
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.O,
      CellState.X,
      CellState.X,
      CellState.X,
      CellState.O,
      CellState.O,
    ]
    expect(getWinningMoveIndex(board)).toBe(-1)
  })

  it("should return -1 if the board is empty", () => {
    const board = Array(9).fill(CellState.Empty)
    expect(getWinningMoveIndex(board)).toBe(-1)
  })
})
