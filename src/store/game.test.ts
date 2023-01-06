import {
  cellsState,
  playerTurn,
  winner,
  aiEnabled,
  tie,
  gameState,
  switchTurns,
  setWinner,
  enableAi,
  setTie,
  startGame,
  setCellsState,
  resetGame,
} from "./game"
import { CellState } from "@components/Board/Cell/Cell.types"
import { GameState } from "@type/game"

describe("game module", () => {
  it("switchTurns should switch the value of playerTurn", () => {
    playerTurn.set(CellState.X)
    switchTurns()
    expect(playerTurn.get()).toBe(CellState.O)
  })

  it("setWinner should set the winner and change the game state to GameOver", () => {
    playerTurn.set(CellState.X)
    setWinner()
    expect(winner.get()).toBe(CellState.X)
    expect(gameState.get()).toBe(GameState.GameOver)
  })

  it("enableAi should set the value of aiEnabled", () => {
    enableAi(true)
    expect(aiEnabled.get()).toBe(true)
  })

  it("setTie should set tie to true and change the game state to GameOver", () => {
    setTie()
    expect(tie.get()).toBe(true)
    expect(gameState.get()).toBe(GameState.GameOver)
  })

  it("startGame should set the game state to Playing", () => {
    startGame()
    expect(gameState.get()).toBe(GameState.Playing)
  })

  it("setCellsState should update the value of cellsState", () => {
    const updatedBoard = Array(9).fill(CellState.X)
    setCellsState(updatedBoard)
    expect(cellsState.get()).toEqual(updatedBoard)
  })

  it("resetGame should reset all game state atoms to their initial values", () => {
    const initialCells = Array(9).fill(CellState.Empty)
    playerTurn.set(CellState.O)
    winner.set(CellState.X)
    aiEnabled.set(true)
    tie.set(true)
    gameState.set(GameState.Playing)
    resetGame()
    expect(playerTurn.get()).toBe(CellState.X)
    expect(winner.get()).toBe(CellState.Empty)
    expect(aiEnabled.get()).toBe(false)
    expect(tie.get()).toBe(false)
    expect(gameState.get()).toBe(GameState.Menu)
    expect(cellsState.get()).toEqual(initialCells)
  })
})
