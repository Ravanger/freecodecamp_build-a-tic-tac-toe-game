import { useEffect } from "react"
import { useStore } from "@nanostores/react"
import { checkForTie, checkForWinner } from "@util/game"
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
  aiEnabled,
  aiDifficulty,
} from "@store/game"
import TurnIndicator from "@components/common/TurnIndicator"
import Board from "@components/Board"
import Spacer from "@components/common/Spacer"
import Menu from "@components/Menu"
import GameOver from "@components/GameOver"
import { CellState, GameState } from "@type/game"
import { getEasyMoveIndex, getHardMoveIndex, getMidMoveIndex } from "@util/ai"
import { AiDifficulty } from "@type/ai"

const Game: React.FC = () => {
  const currentCellsState = useStore(cellsState)
  const currentGameState = useStore(gameState)
  const currentPlayerTurn = useStore(playerTurn)
  const currentWinner = useStore(winner)
  const isTie = useStore(tie)
  const isAiEnabled = useStore(aiEnabled)
  const selectedAiDifficulty = useStore(aiDifficulty)

  useEffect(() => {
    if (!isAiEnabled || currentPlayerTurn !== CellState.O) return
    makeAiMove()
  }, [currentPlayerTurn])

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

  const makeAiMove = async () => {
    if (currentPlayerTurn !== CellState.O) return

    let emptySquareIndex = -1
    switch (selectedAiDifficulty) {
      case AiDifficulty.Easy:
        emptySquareIndex = await getEasyMoveIndex(currentCellsState)
        break
      case AiDifficulty.Mid:
        emptySquareIndex = await getMidMoveIndex(currentCellsState)
        break
      case AiDifficulty.Hard:
        emptySquareIndex = await getHardMoveIndex(currentCellsState)
        break
      default:
        const _exhaustiveCheck: never = selectedAiDifficulty
        throw new Error(`Unhandled case: ${_exhaustiveCheck}`)
    }

    if (emptySquareIndex === -1) {
      setTie()
    }

    const nextSquares = currentCellsState.slice()
    nextSquares[emptySquareIndex] = CellState.O
    setCellsState(nextSquares)

    if (checkForWinner(nextSquares)) {
      setWinner()
    } else {
      switchTurns()
    }
  }

  const handleCellClick = async (index: number) => {
    if (
      currentCellsState[index] !== CellState.Empty ||
      currentWinner !== CellState.Empty ||
      isTie
    ) {
      return
    }

    if (isAiEnabled && currentPlayerTurn === CellState.O) return

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
  }

  let screenToRender = <></>

  switch (currentGameState) {
    case GameState.Menu:
      screenToRender = <Menu />
      break
    case GameState.Playing:
      screenToRender = (
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
      screenToRender = <GameOver isTie={isTie} />
      break
    default:
      const _exhaustiveCheck: never = currentGameState
      throw new Error(`Unhandled case: ${_exhaustiveCheck}`)
  }

  return <main>{screenToRender}</main>
}

export default Game
