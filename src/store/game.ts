import { atom } from "nanostores"
import { GameState } from "@components/Game/Game.types"
import { CellState } from "@components/Board/Cell/Cell.types"

const initialCells = Array(9).fill(CellState.Empty)

export const cellsState = atom<CellState[]>(initialCells)
export const playerTurn = atom<CellState>(CellState.X)
export const winner = atom<CellState>(CellState.Empty)
export const aiEnabled = atom<boolean>(false)
export const tie = atom<boolean>(false)
export const gameState = atom<GameState>(GameState.Menu)

export const switchTurns = () => {
  playerTurn.set(playerTurn.get() === CellState.X ? CellState.O : CellState.X)
}

export const setWinner = () => {
  winner.set(playerTurn.get())
  gameState.set(GameState.GameOver)
}

export const enableAi = () => {
  aiEnabled.set(true)
}

export const setTie = () => {
  tie.set(true)
  gameState.set(GameState.GameOver)
}

export const startGame = () => {
  gameState.set(GameState.Playing)
}

export const setCellsState = (updatedBoard: CellState[]) => {
  cellsState.set(updatedBoard)
}

export const resetGame = () => {
  playerTurn.set(CellState.X)
  winner.set(CellState.Empty)
  aiEnabled.set(false)
  tie.set(false)
  gameState.set(GameState.Menu)
  cellsState.set(initialCells)
}
