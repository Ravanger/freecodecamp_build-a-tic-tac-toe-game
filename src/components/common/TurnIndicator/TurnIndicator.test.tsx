import { playerTurn } from "@store/game"
import { render, screen } from "@testing-library/react"
import TurnIndicator from "./TurnIndicator"

describe("TurnIndicator component", () => {
  const currentPlayerTurn = playerTurn.get()

  beforeEach(() => {
    render(<TurnIndicator />)
  })

  it("should display the current player turn", () => {
    const element = screen.getByText(`Turn: ${currentPlayerTurn}`)
    expect(element).toBeDefined()
  })
})
