import "@testing-library/jest-dom"
import { configure } from "@testing-library/react"

configure({ testIdAttribute: "data-cy" })

/**
 * The `Icon` component dynamically loads the SVG icon (Close button) and
 * causes the component to update/re-render. To get around these warnings we
 * need to call preloadAll.
 */
jest.isolateModules(() => {
  const preloadAll = require("jest-next-dynamic")

  beforeEach(async () => {
    await preloadAll()
  })
})

/*
  RADIX MOCKS
*/

// Radix uses a a resize observer which is not available in jsdom.
window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }))

// JSDOM doesn't implement PointerEvent so we need to mock our own implementation
// Default to mouse left click interaction
// https://github.com/radix-ui/primitives/issues/1207
// https://github.com/jsdom/jsdom/pull/2666
class MockPointerEvent extends Event {
  button: number
  ctrlKey: boolean
  pointerType: string

  constructor(type: string, props: PointerEventInit) {
    super(type, props)
    this.button = props.button || 0
    this.ctrlKey = props.ctrlKey || false
    this.pointerType = props.pointerType || "mouse"
  }
}

window.PointerEvent = MockPointerEvent as any
window.HTMLElement.prototype.scrollIntoView = jest.fn()
window.HTMLElement.prototype.releasePointerCapture = jest.fn()
window.HTMLElement.prototype.hasPointerCapture = jest.fn()
window.HTMLElement.prototype.releasePointerCapture = jest.fn()
