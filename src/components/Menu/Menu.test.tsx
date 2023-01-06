import { GameState } from "@type/game"
import { aiDifficulty, aiEnabled, gameState } from "@store/game"
import { render, screen, act } from "@testing-library/react"
import Menu from "./Menu"
import { AiDifficulty, AiSelection } from "@type/ai"

describe("Menu component", () => {
  beforeEach(() => {
    render(<Menu />)
  })

  it("renders a button for starting the game and starts the game when clicked", () => {
    const button = screen.getByText("Start Game")
    expect(button).toBeDefined()

    expect(gameState.get()).toBe(GameState.Menu)
    act(() => {
      button.click()
    })
    expect(gameState.get()).toBe(GameState.Playing)
  })

  it("should call enableAi with the correct value depending on aiSelectionButton", () => {
    for (const selection of Object.values(AiSelection)) {
      const aiSelectionButton = screen.getByText(selection)
      act(() => {
        aiSelectionButton.click()
      })
      expect(aiEnabled.get()).toBe(selection === AiSelection.Ai)
    }
  })

  it("should call setAiDifficulty with the correct difficulty", () => {
    const aiSelectionButton = screen.getByText(AiSelection.Ai)
    act(() => {
      aiSelectionButton.click()
    })

    for (const difficulty of Object.values(AiDifficulty)) {
      const difficultyButton = screen.getByText(difficulty)
      act(() => {
        difficultyButton.click()
      })
      expect(aiDifficulty.get()).toBe(difficulty)
    }
  })

  it("should enable or disable ai difficulty selection group depending on aiSelectionButton", () => {
    const aiSelectionButton = screen.getByText(AiSelection.Ai)
    act(() => {
      aiSelectionButton.click()
    })

    for (const difficulty of Object.values(AiDifficulty)) {
      expect(screen.getByText(difficulty)).toHaveProperty("disabled", false)
    }

    const friendSelectionButton = screen.getByText(AiSelection.Friend)
    act(() => {
      friendSelectionButton.click()
    })

    for (const difficulty of Object.values(AiDifficulty)) {
      expect(screen.getByText(difficulty)).toHaveProperty("disabled", true)
    }
  })
})
