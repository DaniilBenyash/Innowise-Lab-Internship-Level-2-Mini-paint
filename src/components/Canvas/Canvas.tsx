import React, { LegacyRef } from 'react'
import { canvasWidth, canvasHeight } from '@/variables/canvasVariables'

type CanvasProps = {
  className: string
}

export const Canvas = React.forwardRef(function canvas(
  { className }: CanvasProps,
  ref: LegacyRef<HTMLCanvasElement>,
) {
  return <canvas width={canvasWidth} height={canvasHeight} className={className} ref={ref}></canvas>
})
