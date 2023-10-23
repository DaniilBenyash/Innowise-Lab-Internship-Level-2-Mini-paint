import { typeContext } from "../components/Canvas/useCanvas";

const startDrawBrush = (context: typeContext, setDraw: any) => {
    setDraw(true)

    context?.beginPath();
}

const moveDrawBrush = (ev: MouseEvent, context: typeContext, draw: boolean) => {
    if (!draw) return

    context?.lineTo(ev.offsetX, ev.offsetY);
    context?.stroke();  
}

export { startDrawBrush, moveDrawBrush}