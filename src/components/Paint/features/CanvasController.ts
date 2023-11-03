import { Tool } from './Tool'

export class CanvasСontroller {
  public canvas: HTMLCanvasElement | null = null
  public currentTool: Tool | null = null
  private context: CanvasRenderingContext2D | null = null
  private canvasWidth: number | null = null
  private canvasHeight: number | null = null
  private static instance: CanvasСontroller

  private constructor() {}

  public static getInstance(): CanvasСontroller {
    if (!CanvasСontroller.instance) {
      CanvasСontroller.instance = new CanvasСontroller()
    }
    return CanvasСontroller.instance
  }

  public setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    if(!canvas) return
    this.context = canvas.getContext('2d')
    this.canvasWidth = canvas.width
    this.canvasHeight = canvas.height
  }

  public get getCanvas() {
    return this.canvas
  }

  public setCurrentTool(tool: Tool) {
    this.currentTool = tool
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
    if (this.context && this.canvasWidth && this.canvasHeight) {
      const originalColor = this.context.fillStyle
      this.context.fillStyle = '#ffffff'
      this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.context.fillStyle = originalColor
    }
  }
}
