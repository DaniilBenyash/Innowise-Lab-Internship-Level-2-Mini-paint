export enum enumDraw {
    Brush = 'brushDraw',
    Line = 'lineDraw',
    Rectangle = 'rectangleDraw'
}

export type typeContext = CanvasRenderingContext2D | null | undefined

export type typeDrawEvents = {
    [key in enumDraw]: typeDrawEvent
}
type typeDrawEvent = {
    startDraw: (event: MouseEvent) => any,
    moveDraw: (event: MouseEvent) => any
    finishDraw: (event: MouseEvent) => any
}
