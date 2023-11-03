import { Tool } from '../Tool'

export class Rectangle extends Tool {
  mouseDown: boolean = false
  coordX: number = 0
  coordY: number = 0
  image: string = ''

  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    super.addEventListeners()
  }

  startDraw(ev: MouseEvent) {
    this.mouseDown = true
    this.context?.beginPath()
    this.coordX = ev.offsetX
    this.coordY = ev.offsetY
    this.image = this.canvas.toDataURL()
  }

  draw(ev: MouseEvent) {
    if (!this.mouseDown) return

    const img = new Image()
    img.src = this.image

    this.context?.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.context?.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight)
    this.context?.beginPath()
    this.context?.rect(this.coordX, this.coordY, ev.offsetX - this.coordX, ev.offsetY - this.coordY)
    this.context?.fill()
    this.context?.stroke()
    this.context?.closePath()
  }

  finishDraw() {
    this.mouseDown = false
  }
}
