import { GameState } from "@type/game"
import { gameState } from "@store/game"
import { render, screen } from "@testing-library/react"
import Menu from "./Menu"

describe("Menu component", () => {
  // TODO: Tests

  beforeEach(() => {
    render(<Menu />)
  })

  it("renders a button for starting the game and starts the game when clicked", () => {
    const button = screen.getByText("Start Game")
    expect(button).toBeDefined()

    expect(gameState.get()).toBe(GameState.Menu)
    button.click()
    expect(gameState.get()).toBe(GameState.Playing)
  })
})
