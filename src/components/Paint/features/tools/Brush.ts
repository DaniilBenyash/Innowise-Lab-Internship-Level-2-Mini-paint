import { Tool } from '../Tool'

export class Brush extends Tool {
  mouseDown: boolean = false

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    super.addEventListeners()
  }

  startDraw() {
    this.mouseDown = true
    this.context?.beginPath()
  }

  draw(ev: MouseEvent) {
    if (!this.mouseDown) return
    this.context?.lineTo(ev.offsetX, ev.offsetY)
    this.context?.stroke()
  }
  finishDraw() {
    this.mouseDown = false
  }
}
