import { CellState } from "@components/Board/Cell/Cell.types"
import { atom } from "nanostores"

export const playerTurn = atom<CellState>(CellState.X)
export const winner = atom<CellState>(CellState.Empty)
export const isAiEnabled = atom<boolean>(true)

export function switchTurns() {
  playerTurn.set(playerTurn.get() === CellState.X ? CellState.O : CellState.X)
}

export function setWinner() {
  winner.set(playerTurn.get())
}

export function enableAi() {
  isAiEnabled.set(true)
}
