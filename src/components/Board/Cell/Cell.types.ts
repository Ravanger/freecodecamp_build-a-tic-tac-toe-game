export interface CellPropTypes {
  state: CellState
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export enum CellState {
  X = "X",
  O = "O",
  Empty = "",
}
