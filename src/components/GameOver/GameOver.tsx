import type { GameOverPropTypes } from "./GameOver.types"
import Spacer from "@components/common/Spacer"
import WinnerIndicator from "@components/common/WinnerIndicator"
import { resetGame } from "@store/game"

const GameOver: React.FC<GameOverPropTypes> = ({ isTie }) => {
  return (
    <div>
      {isTie ? "It's a tie!" : <WinnerIndicator />}
      <Spacer size="4ch" />
      <button type="button" onClick={resetGame}>
        Restart Game
      </button>
    </div>
  )
}

export default GameOver
