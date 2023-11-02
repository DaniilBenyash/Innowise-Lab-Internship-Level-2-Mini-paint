export abstract class Paint {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | null
  canvasWidth: number
  canvasHeight: number

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
  }

  abstract startDraw(ev?: MouseEvent): void
  abstract draw(ev: MouseEvent): void
  abstract finishDraw(ev?: MouseEvent): void

  addEventListeners() {
    this.canvas.onmousedown = this.startDraw.bind(this)
    this.canvas.onmousemove = this.draw.bind(this)
    this.canvas.onmouseup = this.finishDraw.bind(this)
  }

  removeEventListeners() {
    this.canvas.onmousedown = null
    this.canvas.onmousemove = null
    this.canvas.onmouseup = null
  }

  public changeColor(color: string) {
    if (!this.context) return
    
    this.context.strokeStyle = color
    this.context.fillStyle = color
  }

  public changeWidthBrush(width: number) {
    if (!this.context) return

    this.context.lineWidth = width
  }

  public clearPaint() {
    if (!this.context) return

    const originalColor = this.context.fillStyle
    this.context.fillStyle = '#ffffff'
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.context.fillStyle = originalColor
  }
}
