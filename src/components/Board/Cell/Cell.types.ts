import type { CellState } from "@type/game"

export interface CellPropTypes {
  state: CellState
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
