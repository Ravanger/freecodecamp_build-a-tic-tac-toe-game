import type { CellState } from "@type/game"

export interface BoardPropTypes {
  cellsState: CellState[]
  handleCellClick: (index: number) => Promise<void>
}
