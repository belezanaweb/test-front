import ReactDOM from 'react-dom'
import { renderToDOM } from './index'

describe('test ReactDOM.render', () => {
  const originalRender = ReactDOM.render
  const originalGetElement = global.document.getElementById
  beforeEach(() => {
    global.document.getElementById = () => true
    ReactDOM.render = jest.fn()
  })
  afterAll(() => {
    global.document.getElementById = originalGetElement
    ReactDOM.render = originalRender
  })
  it('should call ReactDOM.render', () => {
    renderToDOM()
    expect(ReactDOM.render).toHaveBeenCalled()
  })
})
