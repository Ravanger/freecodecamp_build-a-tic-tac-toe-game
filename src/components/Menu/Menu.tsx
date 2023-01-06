import { startGame, enableAi, aiEnabled } from "@store/game"
import { useStore } from "@nanostores/react"
import SelectionGroup from "@components/common/SelectionGroup"
import Spacer from "@components/common/Spacer"
import styles from "./Menu.module.scss"
import Button from "@components/common/Button"

enum AiSelection {
  Friend = "friend",
  Ai = "ai",
}

enum AiDifficult {
  Easy = "easy",
  Mid = "mid",
  Hard = "hard",
}

const Menu: React.FC = () => {
  const isAiEnabled = useStore(aiEnabled)

  const handleAiSelection = (value: AiSelection) => {
    switch (value) {
      case AiSelection.Friend:
        return enableAi(false)
      case AiSelection.Ai:
        return enableAi(true)
      default:
        const _exhaustiveCheck: never = value
        throw new Error(`Unhandled case: ${_exhaustiveCheck}`)
    }
  }

  const handleAiDifficulty = (value: AiDifficult) => {
    // TODO: AI Difficulty

    switch (value) {
      case AiDifficult.Easy:
        // return easyDifficulty()
        return
      case AiDifficult.Mid:
        // return midDifficulty()
        return
      case AiDifficult.Hard:
        // return hardDifficulty()
        return
      default:
        const _exhaustiveCheck: never = value
        throw new Error(`Unhandled case: ${_exhaustiveCheck}`)
    }
  }

  return (
    <div className={styles.menu}>
      <div className={styles.settings}>
        <SelectionGroup<AiSelection>
          title="Play against"
          handleClick={handleAiSelection}
          values={[AiSelection.Friend, AiSelection.Ai]}
          selected={isAiEnabled ? AiSelection.Ai : AiSelection.Friend}
          // disabled
        />
        <Spacer size="4ch" />
        <SelectionGroup
          title="AI difficulty"
          handleClick={handleAiDifficulty}
          values={[AiDifficult.Easy, AiDifficult.Mid, AiDifficult.Hard]}
          selected={AiDifficult.Easy}
          disabled={!isAiEnabled}
        />
      </div>
      <Spacer size="8ch" />
      <Button handleClick={startGame}>Start Game</Button>
    </div>
  )
}

export default Menu
