import { useStore } from "@nanostores/react"
import { winner } from "@store/game"

const WinnerIndicator: React.FC = () => {
  const currentWinner = useStore(winner)

  return <div>{`Winner: ${currentWinner ? currentWinner : "?"}`}</div>
}

export default WinnerIndicator
