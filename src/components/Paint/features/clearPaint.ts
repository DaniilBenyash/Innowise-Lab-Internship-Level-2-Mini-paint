import { RefObject } from 'react'

interface IClearPaint {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | null
  canvasWidth: number
  canvasHeight: number
  clear(): void
}

export class ClearPaint implements IClearPaint {
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

  clear() {
    if (!this.context) return

    const originalColor = this.context.fillStyle
    this.context.fillStyle = '#ffffff'
    this.context.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
    this.context.fillStyle = originalColor
  }
}

export const clearCanvas = (canvasRef: RefObject<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const clearPaint = new ClearPaint(canvas)
    clearPaint.clear()
  }