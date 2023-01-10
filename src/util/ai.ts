import { CellState } from "@type/game"

export const getEasyMoveIndex = async (currentCellsState: CellState[]) => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return currentCellsState.findIndex((square) => square === CellState.Empty)
}

export const getMidMoveIndex = async (currentCellsState: CellState[]) => {
  // TODO: Mid difficulty
  await new Promise((resolve) => setTimeout(resolve, 500))
  return currentCellsState.findIndex((square) => square === CellState.Empty)
}

export const getHardMoveIndex = async (currentCellsState: CellState[]) => {
  // TODO: Hard difficulty
  await new Promise((resolve) => setTimeout(resolve, 500))
  return currentCellsState.findIndex((square) => square === CellState.Empty)
}
