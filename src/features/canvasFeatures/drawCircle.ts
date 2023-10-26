import { typeContext } from '../../variables/canvasTypeVariables'
import { startDraw } from './startDraw'

const coord = {
  x: 0,
  y: 0,
}

const startDrawCircle = (context: typeContext, setDraw: React.Dispatch<React.SetStateAction<boolean>>, ev: MouseEvent) =>
  startDraw(context, setDraw, ev, coord)

const moveDrawCircle = (
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

  const radius = Math.sqrt((ev.offsetX - coord.x) ** 2 + (ev.offsetY - coord.y) ** 2)

  context?.clearRect(0, 0, canvasWidth, canvasHeight)
  context?.drawImage(img, 0, 0, canvasWidth, canvasHeight)
  context?.beginPath()
  context?.arc(coord.x, coord.y, radius, 0, 2 * Math.PI)
  context?.fill()
  context?.stroke()
}

export { startDrawCircle, moveDrawCircle }
