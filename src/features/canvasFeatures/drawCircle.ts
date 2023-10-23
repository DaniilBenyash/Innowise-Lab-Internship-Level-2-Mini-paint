import { typeContext } from "../../variables/canvasTypeVariables";

let x = 0
let y = 0

const startDrawCircle = (ev: MouseEvent, context: typeContext, setDraw: any) => {
    setDraw(true)

    context?.beginPath();
    
    x = ev.offsetX
    y = ev.offsetY
}

const moveDrawCircle = (ev: MouseEvent, context: typeContext, image: string | undefined, draw: boolean, canvasWidth: number, canvasHeight: number) => {
    if(!draw) return

    const img = new Image();
    if (image) img.src = image

    const radius = Math.sqrt((ev.offsetX - x) ** 2 + (ev.offsetY - y) ** 2);
    
    context?.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    context?.beginPath();
    context?.arc(x, y, radius, 0, 2 * Math.PI);
    context?.fill()
    context?.stroke();
}

export { startDrawCircle, moveDrawCircle }