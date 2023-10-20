import { Ref, useRef, useEffect, useState } from 'react';
import './Canvas.scss'

export const Canvas = () => {
    const canvasRef: Ref<HTMLCanvasElement> = useRef(null)
    const [draw, setDraw] = useState(false)
       
    
    useEffect(() => {
    
        var mouse = { x:0, y:0};
        const canvas = canvasRef.current 
        const context = canvas?.getContext('2d')
        context && (context.lineWidth = 5)
        const startDraw = () => {
            setDraw(true)
            context?.beginPath();
        }

        function drawEvent(e: MouseEvent) {
            if(draw === true){
             
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
                
                context?.lineTo(mouse.x, mouse.y);
                context?.stroke();

            }
        }
        const finishDraw = () => {
            setDraw(false)
        }
        canvas?.addEventListener("mousedown", startDraw);
        canvas?.addEventListener("mousemove", drawEvent);
        canvas?.addEventListener("mouseup", finishDraw);


        return () => {
            canvas?.removeEventListener("mousedown", startDraw);
            canvas?.removeEventListener("mousemove", drawEvent);
            canvas?.removeEventListener("mouseup", finishDraw);
        
        }
    }, [canvasRef, draw])


    
    return (
        <canvas 
            width={500} 
            height={400} 
            className='canvas'
            ref={canvasRef}
        >
        </canvas>   
    )
}