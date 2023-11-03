import { Tool } from '../Tool'

export class Star extends Tool {
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
    this.context?.moveTo(this.coordX, this.coordY + radius)

    for (let i = 0; i < 2 * 7; i++) {
      const newRadius = i % 2 === 0 ? radius : radius / 2
      const angle = (Math.PI * i) / 6
      this.context?.lineTo(
        this.coordX + newRadius * Math.sin(angle),
        this.coordY + newRadius * Math.cos(angle),
      )
    }

    this.context?.fill()
    this.context?.closePath()
    this.context?.stroke()
  }

  finishDraw() {
    this.mouseDown = false
  }
}
