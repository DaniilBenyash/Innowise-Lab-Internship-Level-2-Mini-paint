import { typeContext } from '@/variables/canvasTypeVariables'
import { startDraw } from './startDraw'

const coord = {
  x: 0,
  y: 0,
}

const startDrawLine = (context: typeContext, setDraw: React.Dispatch<React.SetStateAction<boolean>>, ev: MouseEvent) =>
  startDraw(context, setDraw, ev, coord)

const moveDrawLine = (
  ev: MouseEvent,
  context: typeContext,
  image: string | undefined,
  draw: boolean,
  canvasWidth: number,
  canvasHeight: number,
) => {
  if (!draw) return

  const img = new Image()
  if (image) img.src = image

  context?.clearRect(0, 0, canvasWidth, canvasHeight)
  context?.drawImage(img, 0, 0, canvasWidth, canvasHeight)
  context?.beginPath()
  context?.moveTo(ev.offsetX, ev.offsetY)
  context?.lineTo(coord.x, coord.y)
  context?.stroke()
}

export { startDrawLine, moveDrawLine }
