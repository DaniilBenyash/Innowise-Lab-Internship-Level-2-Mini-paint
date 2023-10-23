import { typeContext } from "../../variables/canvasTypeVariables";

let x = 0
let y = 0

const startDrawLine = (ev: MouseEvent, context: typeContext, setDraw: any) => {
    setDraw(true)

    context?.beginPath();
    context?.moveTo(ev.offsetX, ev.offsetY);
    
    x = ev.offsetX;
    y = ev.offsetY
}

const moveDrawLine = (ev: MouseEvent, context: typeContext, image: string | undefined, draw: boolean, canvasWidth: number, canvasHeight: number) => {
    if(!draw) return

    const img = new Image();
    if (image) img.src = image

    context?.clearRect(0, 0, canvasWidth, canvasHeight)
    context?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    context?.beginPath();
    context?.moveTo(ev.offsetX, ev.offsetY);
    context?.lineTo(x, y);
    context?.stroke();
}

export { startDrawLine, moveDrawLine}