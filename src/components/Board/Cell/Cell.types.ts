export type CellPropTypes = {
  state?: CellState
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type CellState = "X" | "O" | undefined
