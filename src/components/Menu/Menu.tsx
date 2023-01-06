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
    enableAi(value === AiSelection.Ai)
  }

  const handleAiDifficulty = (value: AiDifficulty) => {
    setAiDifficulty(value)
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
