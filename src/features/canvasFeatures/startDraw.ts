import { typeContext } from "../../variables/canvasTypeVariables";

export const startDraw = (context: typeContext, setDraw: any, ev?: MouseEvent, coord?: any) => {
    setDraw(true)

    context?.beginPath();
    
    if (coord) {
        coord.x = ev?.offsetX
        coord.y = ev?.offsetY
    }
    
}
