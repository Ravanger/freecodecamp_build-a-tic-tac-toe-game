import type { CellState } from "./Cell.types"

export interface BoardPropTypes {
  cellsState: CellState[]
  handleCellClick: (index: number) => Promise<void>
}
