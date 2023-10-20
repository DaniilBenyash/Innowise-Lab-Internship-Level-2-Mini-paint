import { RefObject, useEffect, useState } from 'react';

export const useDrawBrush = (canvasRef: RefObject<HTMLCanvasElement>, widthBrush: number, colorBrush: string) => {
    const [draw, setDraw] = useState(false)

    useEffect(() => {
        const canvas = canvasRef?.current
        const context = canvas?.getContext('2d')

        if(context) {
            context.lineWidth = widthBrush
            context.strokeStyle = colorBrush
        }

        const startDraw = () => {
            setDraw(true)
            context?.beginPath();
        }
        
        const drawEvent = (ev: MouseEvent) => {
            if (!draw) return

            context?.lineTo(ev.offsetX, ev.offsetY);
            context?.stroke();  
        }
        
        const finishDraw = () => setDraw(false)
        
        canvas?.addEventListener("mousedown", startDraw);
        canvas?.addEventListener("mousemove", drawEvent);
        canvas?.addEventListener("mouseup", finishDraw);

        return () => {
            canvas?.removeEventListener("mousedown", startDraw);
            canvas?.removeEventListener("mousemove", drawEvent);
            canvas?.removeEventListener("mouseup", finishDraw); 
        }
    }, [canvasRef, colorBrush, draw, widthBrush])
}
