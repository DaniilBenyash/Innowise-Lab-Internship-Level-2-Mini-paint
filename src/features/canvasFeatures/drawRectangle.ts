import { typeContext } from "../../variables/canvasTypeVariables";

let x = 0
let y = 0

const startDrawRectangle = (ev: MouseEvent, context: typeContext, setDraw: any) => {
    setDraw(true)

    context?.beginPath();
    
    x = ev.offsetX
    y = ev.offsetY
}

const moveDrawRectangle = (ev: MouseEvent, context: typeContext, image: string | undefined, draw: boolean, canvasWidth: number, canvasHeight: number) => {
    if(!draw) return

    const img = new Image();
    if (image) img.src = image

    context?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    context?.beginPath();
    context?.rect(x, y, ev.offsetX - x, ev.offsetY - y);
    context?.fill()
    context?.stroke();
    context?.closePath()
}

export { startDrawRectangle, moveDrawRectangle }