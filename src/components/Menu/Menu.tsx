import {
  startGame,
  enableAi,
  aiEnabled,
  setAiDifficulty,
  aiDifficulty,
} from "@store/game"
import { useStore } from "@nanostores/react"
import SelectionGroup from "@components/common/SelectionGroup"
import Spacer from "@components/common/Spacer"
import styles from "./Menu.module.scss"
import Button from "@components/common/Button"
import { AiDifficulty, AiSelection } from "src/types/ai"

const Menu: React.FC = () => {
  const isAiEnabled = useStore(aiEnabled)
  const AiDifficultySelected = useStore(aiDifficulty)

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

  const handleAiDifficulty = (value: AiDifficulty) => {
    switch (value) {
      case AiDifficulty.Easy:
        return setAiDifficulty(AiDifficulty.Easy)
      case AiDifficulty.Mid:
        return setAiDifficulty(AiDifficulty.Mid)
      case AiDifficulty.Hard:
        return setAiDifficulty(AiDifficulty.Hard)
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
        />
        <Spacer size="4ch" />
        <SelectionGroup
          title="AI difficulty"
          handleClick={handleAiDifficulty}
          values={[AiDifficulty.Easy, AiDifficulty.Mid, AiDifficulty.Hard]}
          selected={AiDifficultySelected}
          disabled={!isAiEnabled}
        />
      </div>
      <Spacer size="8ch" />
      <Button handleClick={startGame}>Start Game</Button>
    </div>
  )
}

export default Menu
