import { typeContext } from '../../variables/canvasTypeVariables'
import { startDraw } from './startDraw'

const coord = {
  x: 0,
  y: 0,
}

const startDrawStar = (context: typeContext, setDraw: React.Dispatch<React.SetStateAction<boolean>>, ev: MouseEvent) =>
  startDraw(context, setDraw, ev, coord)

const moveDrawStar = (
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
  context?.moveTo(coord.x, coord.y + radius)

  for (let i = 0; i < 2 * 7; i++) {
    const newRadius = i % 2 === 0 ? radius : radius / 2
    const angle = (Math.PI * i) / 6
    context?.lineTo(coord.x + newRadius * Math.sin(angle), coord.y + newRadius * Math.cos(angle))
  }

  context?.fill()
  context?.closePath()
  context?.stroke()
}

export { startDrawStar, moveDrawStar }
