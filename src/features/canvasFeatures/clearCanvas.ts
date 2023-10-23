import { RefObject } from "react";

export const clearCanvas = (canvasRef: RefObject<HTMLCanvasElement>, canvasWidth: number, canvasHeight: number, colorBrush: string) => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d');

    if(context) {
        context.fillStyle = '#ffffff';
        context.fillRect(0, 0, canvasWidth, canvasHeight);
        context.fillStyle = colorBrush;
    }
}
