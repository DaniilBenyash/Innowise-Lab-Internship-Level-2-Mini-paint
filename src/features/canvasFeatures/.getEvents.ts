import { startDrawBrush, moveDrawBrush } from './drawBrush'
import { startDrawLine, moveDrawLine } from './drawLine'
import { startDrawRectangle, moveDrawRectangle } from './drawRectangle'
import { startDrawCircle, moveDrawCircle } from './drawCircle'
import { typeContext, enumDraw, typeDrawEvent } from '@/variables/canvasTypeVariables'
import { moveDrawStar, startDrawStar } from './drawStar'
import { moveDrawPoligon, startDrawPoligon } from './drawPoligon'

export const getEvents = (
  typeEvent: enumDraw,
  context: typeContext,
  setDraw: React.Dispatch<React.SetStateAction<boolean>>,
  draw: boolean,
  image: string | undefined,
  canvasWidth: number,
  canvasHeight: number,
): typeDrawEvent => {
  switch (typeEvent) {
    case enumDraw.Brush:
      return {
        startDraw: () => {
          startDrawBrush(context, setDraw)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawBrush(event, context, draw)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    case enumDraw.Line:
      return {
        startDraw: (event: MouseEvent) => {
          startDrawLine(context, setDraw, event)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawLine(event, context, image, draw, canvasWidth, canvasHeight)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    case enumDraw.Rectangle:
      return {
        startDraw: (event: MouseEvent) => {
          startDrawRectangle(context, setDraw, event)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawRectangle(event, context, image, draw, canvasWidth, canvasHeight)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    case enumDraw.Circle:
      return {
        startDraw: (event: MouseEvent) => {
          startDrawCircle(context, setDraw, event)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawCircle(event, context, image, draw, canvasWidth, canvasHeight)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    case enumDraw.Star:
      return {
        startDraw: (event: MouseEvent) => {
          startDrawStar(context, setDraw, event)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawStar(event, context, image, draw, canvasWidth, canvasHeight)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    case enumDraw.Poligon:
      return {
        startDraw: (event: MouseEvent) => {
          startDrawPoligon(context, setDraw, event)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawPoligon(event, context, image, draw, canvasWidth, canvasHeight)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
    default:
      return {
        startDraw: () => {
          startDrawBrush(context, setDraw)
        },
        moveDraw: (event: MouseEvent) => {
          moveDrawBrush(event, context, draw)
        },
        finishDraw: () => {
          setDraw(false)
        },
      }
  }
}
