import { startGame } from "@store/game"

const Menu: React.FC = () => {
  return (
    <div>
      <button type="button" onClick={startGame}>
        Start Game
      </button>
    </div>
  )
}

export default Menu
