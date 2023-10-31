import { RefObject } from 'react'

interface IChangePaintSettings {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | null

  changeColor(color: string): void
}

class ChangePaintSettings implements IChangePaintSettings {
  canvas: HTMLCanvasElement
  context: CanvasRenderingContext2D | null

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = canvas.getContext('2d')
  }

  changeColor(color: string) {
    if (!this.context) return

    this.context.strokeStyle = color
    this.context.fillStyle = color
  }

  changeWidthBrush(width: number) {
    if (!this.context) return

    this.context.lineWidth = width
  }
}

export const changeColor = (canvasRef: RefObject<HTMLCanvasElement>, color: string) => {
  const canvas = canvasRef.current
  if (!canvas) return
  const changePaintSettings = new ChangePaintSettings(canvas)
  changePaintSettings.changeColor(color)
}

export const changeWidthBrush = (canvasRef: RefObject<HTMLCanvasElement>, width: number) => {
  const canvas = canvasRef.current
  if (!canvas) return
  const changePaintSettings = new ChangePaintSettings(canvas)
  changePaintSettings.changeWidthBrush(width)
}
