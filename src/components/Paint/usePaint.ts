import { RefObject, useEffect, useState } from 'react'
import { typeContext, enumDraw } from '../../variables/canvasTypeVariables'
import { getEvents } from '../../features/canvasFeatures/.getEvents'

export const usePaint = (
  canvasRef: RefObject<HTMLCanvasElement>,
  typeDraw: enumDraw,
  widthBrush: number,
  colorBrush: string,
  canvasWidth: number,
  canvasHeight: number,
) => {
  const [draw, setDraw] = useState(false)

  useEffect(() => {
    const canvas = canvasRef?.current
    const context: typeContext = canvas?.getContext('2d')
    const image = canvas?.toDataURL()

    if (context) {
      context.lineWidth = widthBrush
      context.strokeStyle = colorBrush
      context.fillStyle = colorBrush
    }

    const drawEvents = getEvents(typeDraw, context, setDraw, draw, image, canvasWidth, canvasHeight)

    canvas?.addEventListener('mousedown', drawEvents.startDraw)
    canvas?.addEventListener('mousemove', drawEvents.moveDraw)
    canvas?.addEventListener('mouseup', drawEvents.finishDraw)

    return () => {
      canvas?.removeEventListener('mousedown', drawEvents.startDraw)
      canvas?.removeEventListener('mousemove', drawEvents.moveDraw)
      canvas?.removeEventListener('mouseup', drawEvents.finishDraw)
    }
  }, [canvasHeight, canvasRef, canvasWidth, colorBrush, draw, typeDraw, widthBrush])
}
