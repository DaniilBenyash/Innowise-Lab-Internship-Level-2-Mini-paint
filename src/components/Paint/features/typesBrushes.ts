import { BrushesTypes } from '@/variables/canvasTypeVariables'
import { Brush } from './tools/Brush'
import { Line } from './tools/Line'
import { Circle } from './tools/Circle'
import { Poligon } from './tools/Poligon'
import { Rectangle } from './tools/Rectangle'
import { Star } from './tools/Star'

export const typesBrushes = {
  [BrushesTypes.Brush]: (canvas: HTMLCanvasElement) => new Brush(canvas),
  [BrushesTypes.Line]: (canvas: HTMLCanvasElement) => new Line(canvas),
  [BrushesTypes.Circle]: (canvas: HTMLCanvasElement) => new Circle(canvas),
  [BrushesTypes.Poligon]: (canvas: HTMLCanvasElement) => new Poligon(canvas),
  [BrushesTypes.Rectangle]: (canvas: HTMLCanvasElement) => new Rectangle(canvas),
  [BrushesTypes.Star]: (canvas: HTMLCanvasElement) => new Star(canvas),
}
