import { TypesOfBrushes } from '@/variables/canvasTypeVariables'
import { Brush } from './tools/Brush'
import { Line } from './tools/Line'
import { Circle } from './tools/Circle'
import { Poligon } from './tools/Poligon'
import { Rectangle } from './tools/Rectangle'
import { Star } from './tools/Star'

export const typesBrushes = {
  [TypesOfBrushes.Brush]: (canvas: HTMLCanvasElement) => new Brush(canvas),
  [TypesOfBrushes.Line]: (canvas: HTMLCanvasElement) => new Line(canvas),
  [TypesOfBrushes.Circle]: (canvas: HTMLCanvasElement) => new Circle(canvas),
  [TypesOfBrushes.Poligon]: (canvas: HTMLCanvasElement) => new Poligon(canvas),
  [TypesOfBrushes.Rectangle]: (canvas: HTMLCanvasElement) => new Rectangle(canvas),
  [TypesOfBrushes.Star]: (canvas: HTMLCanvasElement) => new Star(canvas),
}
