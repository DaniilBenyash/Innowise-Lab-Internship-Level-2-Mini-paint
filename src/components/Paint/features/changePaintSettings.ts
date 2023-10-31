interface IChangePaintSettings {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D | null

    changeColor(color: string): void
  }
  
  export class ChangePaintSettings implements IChangePaintSettings {
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D | null

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas
      this.context = canvas.getContext('2d')
    }
  
    changeColor(color: string) {
      if (this.context) {
        this.context.strokeStyle = color
        this.context.fillStyle = color
      }
    }

    changeWidthBrush(width: number) {
      if (this.context) {
        this.context.lineWidth = width
      }
    }
  }
  