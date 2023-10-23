import { RefObject, useEffect, useState } from 'react';
import { startDrawBrush, moveDrawBrush } from '../../features/canvasFeatures/drawBrush';
import { startDrawLine, moveDrawLine } from '../../features/canvasFeatures/drawLine';
import { startDrawRectangle, moveDrawRectangle } from '../../features/canvasFeatures/drawRectangle';
import { startDrawCircle, moveDrawCircle } from '../../features/canvasFeatures/drawCircle';
import { typeContext, enumDraw, typeDrawEvents } from '../../variables/canvasTypeVariables';
import { moveDrawStar, startDrawStar } from '../../features/canvasFeatures/drawStar';
import { moveDrawPoligon, startDrawPoligon } from '../../features/canvasFeatures/drawPoligon';


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
                startDraw: (event: MouseEvent) => {startDrawLine(context, setDraw, event)},
                moveDraw: (event: MouseEvent) => {moveDrawLine(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Rectangle]: {
                startDraw: (event: MouseEvent) => {startDrawRectangle(context, setDraw, event)},
                moveDraw: (event: MouseEvent) => {moveDrawRectangle(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Circle]: {
                startDraw: (event: MouseEvent) => {startDrawCircle(context, setDraw, event)},
                moveDraw: (event: MouseEvent) => {moveDrawCircle(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Star]: {
                startDraw: (event: MouseEvent) => {startDrawStar(context, setDraw, event)},
                moveDraw: (event: MouseEvent) => {moveDrawStar(event, context, image, draw, canvasWidth, canvasHeight)},
                finishDraw: () => {setDraw(false)},
            },
            [enumDraw.Poligon]: {
                startDraw: (event: MouseEvent) => {startDrawPoligon(context, setDraw, event)},
                moveDraw: (event: MouseEvent) => {moveDrawPoligon(event, context, image, draw, canvasWidth, canvasHeight)},
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
