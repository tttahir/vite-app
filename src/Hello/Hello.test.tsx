import { unmountComponentAtNode } from "react-dom"
import { render } from "@testing-library/react"
// import { render, waitForElementToBeRemoved, getByText } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { Hello } from "./Hello"

let container: any = null
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container)
  container.remove()
  container = null
})

it("renders with or without a name", async () => {
  act(() => {
    render(<Hello />, container)
  })
  expect(container.textContent).toBe("Hey, stranger")
  // await waitForElementToBeRemoved(() => getByText("Harry Potter"))
})
