import { typeContext } from '../../variables/canvasTypeVariables'
import { startDraw } from './startDraw'

const coord = {
  x: 0,
  y: 0,
}

const startDrawRectangle = (context: typeContext, setDraw: React.Dispatch<React.SetStateAction<boolean>>, ev: MouseEvent) =>
  startDraw(context, setDraw, ev, coord)

const moveDrawRectangle = (
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
  context?.rect(coord.x, coord.y, ev.offsetX - coord.x, ev.offsetY - coord.y)
  context?.fill()
  context?.stroke()
  context?.closePath()
}

export { startDrawRectangle, moveDrawRectangle }
