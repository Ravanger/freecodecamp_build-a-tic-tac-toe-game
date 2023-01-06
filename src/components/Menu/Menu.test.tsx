import { GameState } from "@components/Game/Game.types"
import { gameState } from "@store/game"
import { fireEvent, render, screen } from "@testing-library/react"
import Menu from "./Menu"

describe("Menu component", () => {
  // TODO: Tests

  beforeEach(() => {
    gameState.set(GameState.Menu)
    render(<Menu />)
  })

  it("renders a button for starting the game and starts the game when clicked", () => {
    const button = screen.getByText("Start Game")
    expect(button).toBeDefined()

    expect(gameState.get()).toBe(GameState.Menu)
    fireEvent.click(button)
    expect(gameState.get()).toBe(GameState.Playing)
  })
})
