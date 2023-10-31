import { typeContext } from '@/variables/canvasTypeVariables'

type typeCoord = {
  x?: number
  y?: number
}

export const startDraw = (
  context: typeContext,
  setDraw: React.Dispatch<React.SetStateAction<boolean>>,
  ev?: MouseEvent,
  coord?: typeCoord,
) => {
  setDraw(true)

  context?.beginPath()

  if (coord) {
    coord.x = ev?.offsetX
    coord.y = ev?.offsetY
  }
}
