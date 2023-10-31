import { TypesOfBrushes } from '@/variables/canvasTypeVariables'
import { RefObject, useEffect } from 'react'
import { Brush } from './features/tools/Brush'
import { Line } from './features/tools/Line'
import { Circle } from './features/tools/Circle'
import { Poligon } from './features/tools/Poligon'
import { Rectangle } from './features/tools/Rectangle'
import { Star } from './features/tools/Star'

export const usePaint = (canvasRef: RefObject<HTMLCanvasElement>, typeBrush: TypesOfBrushes) => {
  const typesBrushes = {
    [TypesOfBrushes.Brush]: (canvas: HTMLCanvasElement) => new Brush(canvas),
    [TypesOfBrushes.Line]: (canvas: HTMLCanvasElement) => new Line(canvas),
    [TypesOfBrushes.Circle]: (canvas: HTMLCanvasElement) => new Circle(canvas),
    [TypesOfBrushes.Poligon]: (canvas: HTMLCanvasElement) => new Poligon(canvas),
    [TypesOfBrushes.Rectangle]: (canvas: HTMLCanvasElement) => new Rectangle(canvas),
    [TypesOfBrushes.Star]: (canvas: HTMLCanvasElement) => new Star(canvas),
  }

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return
    
    typesBrushes[typeBrush](canvas)
    
    return(() => {
        typesBrushes[typeBrush](canvas).removeEventListeners()
    })
  }, [canvasRef, typeBrush])
}
