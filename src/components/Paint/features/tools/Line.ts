import { Paint } from '../Paint'

export class Line extends Paint {
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
    this.context?.moveTo(ev.offsetX, ev.offsetY)
    this.context?.lineTo(this.coordX, this.coordY)
    this.context?.stroke()
  }

  finishDraw() {
    this.mouseDown = false
  }
}