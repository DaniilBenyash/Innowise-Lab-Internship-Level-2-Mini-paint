import { RefObject, useEffect, useState } from 'react';
import { startDrawBrush, moveDrawBrush } from '../../canvasFeatures/drawBrush';
import { startDrawLine, moveDrawLine } from '../../canvasFeatures/drawLine';
import { startDrawRectangle, moveDrawRectangle } from '../../canvasFeatures/drawRectangle';
import { typeDraw } from './Canvas';

export type typeContext = CanvasRenderingContext2D | null | undefined

export const useCanvas = (canvasRef: RefObject<HTMLCanvasElement>, typeDraw: typeDraw, widthBrush: number, colorBrush: string, canvasWidth: number, canvasHeight: number) => {
    const [draw, setDraw] = useState(false)
  
    useEffect(() => {
        const canvas = canvasRef?.current
        const context: typeContext = canvas?.getContext('2d')
        const image = canvas?.toDataURL();

        if(context) {
            context.lineWidth = widthBrush
            context.strokeStyle = colorBrush
            context.fillStyle = colorBrush
        }

        const typeDrawEvents = {
            brushDraw: {
                startDraw: () => {startDrawBrush(context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawBrush(event, context, draw)},
                finishDraw: () => {setDraw(false)},
            },
            lineDraw: {
                startDraw: (event: MouseEvent) => {startDrawLine(event, context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawLine(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            rectangleDraw: {
                startDraw: (event: MouseEvent) => {startDrawRectangle(event, context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawRectangle(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
        }
        
        canvas?.addEventListener("mousedown", typeDrawEvents[typeDraw].startDraw);
        canvas?.addEventListener("mousemove", typeDrawEvents[typeDraw].moveDraw);
        canvas?.addEventListener("mouseup", typeDrawEvents[typeDraw].finishDraw);

        return () => {
            canvas?.removeEventListener("mousedown", typeDrawEvents[typeDraw].startDraw);
            canvas?.removeEventListener("mousemove", typeDrawEvents[typeDraw].moveDraw);
            canvas?.removeEventListener("mouseup", typeDrawEvents[typeDraw].finishDraw);
        }
    }, [canvasHeight, canvasRef, canvasWidth, colorBrush, draw, typeDraw, widthBrush])
}