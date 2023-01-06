import { fireEvent, render, screen } from "@testing-library/react"
import GameOver from "./GameOver"
import { gameState } from "@store/game"
import { GameState } from "@type/game"

describe("GameOver component", () => {
  beforeEach(() => {
    gameState.set(GameState.Playing)
  })

  it("renders correct text if a tie", () => {
    render(<GameOver isTie={true} />)
    const element = screen.getByText("It's a tie!")
    expect(element).toBeDefined()
  })

  it("renders 'winner' text when the game is not a tie", () => {
    render(<GameOver isTie={false} />)
    const element = screen.getByText(/winner/i, { exact: false })
    expect(element).toBeDefined()
  })

  it("renders the 'Restart Game' button and resets the game when clicked", () => {
    render(<GameOver isTie={false} />)
    const button = screen.getByText("Restart Game")
    expect(button).toBeDefined()

    expect(gameState.get()).toBe(GameState.Playing)
    fireEvent.click(button)
    expect(gameState.get()).toBe(GameState.Menu)
  })
})
