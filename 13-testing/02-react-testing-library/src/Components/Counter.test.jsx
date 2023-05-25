import { render, screen } from "@testing-library/react"
import Counter from "./Counter"

it("should be text counter in the document", () => {
  render(<Counter />)
  const h1text = screen.getByText("Counter")
  expect(h1text).toBeInTheDocument()
})

it("button decrement and increment in the document", () => {
  render(<Counter />)
  const decrementBtn = screen.getByText("-")
  const incrementBtn = screen.getByText("+")
  const count = screen.getByText("0")

  expect(decrementBtn).toBeInTheDocument()
  expect(incrementBtn).toBeInTheDocument()
  expect(count).toBeInTheDocument()
})