import { typeContext } from "../../variables/canvasTypeVariables";
import { startDraw } from "./startDraw";

const startDrawBrush = (context: typeContext, setDraw: any) => startDraw(context, setDraw)

const moveDrawBrush = (ev: MouseEvent, context: typeContext, draw: boolean) => {
    if (!draw) return

    context?.lineTo(ev.offsetX, ev.offsetY);
    context?.stroke();  
}

export { startDrawBrush, moveDrawBrush }