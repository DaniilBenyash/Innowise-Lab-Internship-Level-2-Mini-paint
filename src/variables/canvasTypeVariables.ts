export enum enumDraw {
    Brush = 'brushDraw',
    Line = 'lineDraw',
    Rectangle = 'rectangleDraw',
    Circle = 'circleDraw',
    Star = 'starDraw',
    Poligon = 'poligonDraw'
}

export type typeContext = CanvasRenderingContext2D | null | undefined

type typeDrawEvent = {
    startDraw: (event: MouseEvent) => any,
    moveDraw: (event: MouseEvent) => any
    finishDraw: () => any
}

export type typeDrawEvents = {
    [key in enumDraw]: typeDrawEvent
}

