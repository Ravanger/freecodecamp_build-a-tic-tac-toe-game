import { CellState } from "@components/Board/Cell/Cell.types"
import { atom } from "nanostores"

export const playerTurn = atom<CellState>(CellState.X)

export function switchTurns() {
  playerTurn.set(playerTurn.get() === CellState.X ? CellState.O : CellState.X)
}
