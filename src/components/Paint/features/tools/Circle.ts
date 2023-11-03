import { Tool } from '../Tool'

export class Circle extends Tool {
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
    const radius = Math.sqrt((ev.offsetX - this.coordX) ** 2 + (ev.offsetY - this.coordY) ** 2)

    this.context?.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.context?.drawImage(img, 0, 0, this.canvasWidth, this.canvasHeight)
    this.context?.beginPath()
    this.context?.arc(this.coordX, this.coordY, radius, 0, 2 * Math.PI)
    this.context?.fill()
    this.context?.stroke()
  }

  finishDraw() {
    this.mouseDown = false
  }
}
