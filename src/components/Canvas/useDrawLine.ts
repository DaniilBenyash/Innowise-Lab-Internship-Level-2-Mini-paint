import { RefObject, useEffect, useState } from 'react';

export const useDrawLine = (canvasRef: RefObject<HTMLCanvasElement>, widthBrush: number, colorBrush: string) => {
    const [draw, setDraw] = useState(false)
    useEffect(() => {
        const canvas = canvasRef?.current
        const context = canvas?.getContext('2d')
        if(context) {
            context.lineWidth = widthBrush
            context.strokeStyle = colorBrush
        }
        const startDraw = (ev: MouseEvent) => {
            context?.beginPath();
            context?.moveTo(ev.offsetX, ev.offsetY);
        }
        
        const finishDraw = (ev: MouseEvent) => {
            context?.lineTo(ev.offsetX, ev.offsetY);
            context?.stroke();
        }
        
        canvas?.addEventListener("mousedown", startDraw);
        canvas?.addEventListener("mouseup", finishDraw);

        return () => {
            canvas?.removeEventListener("mousedown", startDraw);
            canvas?.removeEventListener("mouseup", finishDraw);
        }
    }, [canvasRef, colorBrush, widthBrush])
}
