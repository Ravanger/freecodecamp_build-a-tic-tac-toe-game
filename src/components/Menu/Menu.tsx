import { startGame, enableAi, aiEnabled } from "@store/game"
import { useStore } from "@nanostores/react"
import RadioGroup from "@components/common/RadioGroup"
import Spacer from "@components/common/Spacer"
import styles from "./Menu.module.scss"
import Button from "@components/common/Button"

const friend = "friend"
const ai = "ai"
const easy = "easy"
const mid = "mid"
const hard = "hard"

const Menu: React.FC = () => {
  const isAiEnabled = useStore(aiEnabled)

  const handleAiSelection: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    switch (event.target.value) {
      case friend:
      default:
        return enableAi(false)
      case ai:
        return enableAi(true)
    }
  }

  const handleAiDifficulty: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    // TODO: AI Difficulty

    switch (event.target.value) {
      case easy:
      default:
        // return easyDifficulty()
        return
      case mid:
        // return midDifficulty()
        return
      case hard:
        // return hardDifficulty()
        return
    }
  }

  return (
    <div className={styles.menu}>
      <div className={styles.settings}>
        <RadioGroup
          labelText="Play against"
          handleClick={handleAiSelection}
          name="aiSelection"
          values={[friend, ai]}
          checked={isAiEnabled ? ai : friend}
          disabled
        />
        <Spacer size="4ch" />
        <RadioGroup
          labelText="AI difficulty"
          handleClick={handleAiDifficulty}
          name="aiDifficulty"
          values={[easy, mid, hard]}
          checked={easy}
          disabled={!isAiEnabled}
        />
      </div>
      <Spacer size="8ch" />
      <Button handleClick={startGame}>Start Game</Button>
    </div>
  )
}

export default Menu
