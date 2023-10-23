import { RefObject, useEffect, useState } from 'react';
import { startDrawBrush, moveDrawBrush } from '../../features/canvasFeatures/drawBrush';
import { startDrawLine, moveDrawLine } from '../../features/canvasFeatures/drawLine';
import { startDrawRectangle, moveDrawRectangle } from '../../features/canvasFeatures/drawRectangle';
import { typeContext, enumDraw, typeDrawEvents } from '../../variables/canvasTypeVariables';

export const useCanvas = (canvasRef: RefObject<HTMLCanvasElement>, typeDraw: enumDraw, widthBrush: number, colorBrush: string, canvasWidth: number, canvasHeight: number) => {
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

        const drawEvents: typeDrawEvents = {
            [enumDraw.Brush]: {
                startDraw: () => {startDrawBrush(context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawBrush(event, context, draw)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Line]: {
                startDraw: (event: MouseEvent) => {startDrawLine(event, context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawLine(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Rectangle]: {
                startDraw: (event: MouseEvent) => {startDrawRectangle(event, context, setDraw)},
                moveDraw: (event: MouseEvent) => {moveDrawRectangle(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
        }
        
        canvas?.addEventListener("mousedown", drawEvents[typeDraw].startDraw);
        canvas?.addEventListener("mousemove", drawEvents[typeDraw].moveDraw);
        canvas?.addEventListener("mouseup", drawEvents[typeDraw].finishDraw);

        return () => {
            canvas?.removeEventListener("mousedown", drawEvents[typeDraw].startDraw);
            canvas?.removeEventListener("mousemove", drawEvents[typeDraw].moveDraw);
            canvas?.removeEventListener("mouseup", drawEvents[typeDraw].finishDraw);
        }
    }, [canvasHeight, canvasRef, canvasWidth, colorBrush, draw, typeDraw, widthBrush])
}
