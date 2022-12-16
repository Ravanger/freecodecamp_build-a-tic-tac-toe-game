import { GameState } from "./Game.types"
import { useStore } from "@nanostores/react"
import { checkForTie, checkForWinner } from "@util/game"
import { CellState } from "@components/Board/Cell/Cell.types"
import {
  tie,
  playerTurn,
  winner,
  setTie,
  setWinner,
  switchTurns,
  gameState,
  cellsState,
  setCellsState,
} from "@store/game"
import TurnIndicator from "@components/common/TurnIndicator"
import Board from "@components/Board"
import Spacer from "@components/common/Spacer"
import Menu from "@components/Menu"
import GameOver from "@components/GameOver"

const Game: React.FC = () => {
  const currentCellsState = useStore(cellsState)
  const currentGameState = useStore(gameState)
  const currentPlayerTurn = useStore(playerTurn)
  const currentWinner = useStore(winner)
  const isTie = useStore(tie)
  // const isAiEnabled = useStore(aiEnabled)

  // const makeCheatAIMove = async () => {
  //   if (currentPlayerTurn !== CellState.O) return

  //   await new Promise((resolve) => setTimeout(resolve, 500))

  //   // Find the first empty square and mark it with the AI's value.
  //   const emptySquareIndex = cellsState.findIndex(
  //     (square) => square === CellState.Empty
  //   )

  //   if (emptySquareIndex === -1) {
  //     return
  //   }

  //   const updatedBoard = cellsState.map((prevCell, prevCellIndex) =>
  //     prevCellIndex === emptySquareIndex ? currentPlayerTurn : prevCell
  //   )

  //   const nextSquares = cellsState.slice()
  //   nextSquares[emptySquareIndex] = CellState.O
  //   setCellsState(nextSquares)

  //   // Check for a winner.
  //   if (checkForWinner(nextSquares)) {
  //     setWinner()
  //   } else {
  //     switchTurns()
  //   }
  // }

  const handleCellClick = async (index: number) => {
    if (
      currentCellsState[index] !== CellState.Empty ||
      currentWinner !== CellState.Empty ||
      isTie
    ) {
      return
    }

    // if (isAiEnabled && currentPlayerTurn === CellState.O) return

    const updatedBoard = currentCellsState.map((prevCell, prevCellIndex) =>
      prevCellIndex === index ? currentPlayerTurn : prevCell
    )
    setCellsState(updatedBoard)

    if (checkForWinner(updatedBoard)) {
      setWinner()
      return
    }

    if (checkForTie(updatedBoard)) {
      setTie()
      return
    }

    switchTurns()

    // if (isAiEnabled) {
    //   await makeCheatAIMove()
    // }
  }

  let render = <></>

  switch (currentGameState) {
    case GameState.Menu:
    default:
      render = <Menu />
      break
    case GameState.Playing:
      render = (
        <>
          <div>
            <TurnIndicator />
            <Spacer size="2ch" />
          </div>
          <Board
            cellsState={currentCellsState}
            handleCellClick={handleCellClick}
          />
        </>
      )
      break
    case GameState.GameOver:
      render = <GameOver isTie={isTie} />
      break
  }

  return <main>{render}</main>
}

export default Game
