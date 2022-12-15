import { useStore } from "@nanostores/react"
import { playerTurn } from "@store/game"

const TurnIndicator: React.FC = () => {
  const currentPlayerTurn = useStore(playerTurn)

  return <div>Turn: {currentPlayerTurn}</div>
}

export default TurnIndicator
