import React, { LegacyRef } from 'react'
import styles from './Canvas.module.scss'
import { canvasWidth, canvasHeight } from '@/variables/canvasVariables'

export const Canvas = React.forwardRef(function canvas(props, ref: LegacyRef<HTMLCanvasElement>) {
  return (
    <canvas width={canvasWidth} height={canvasHeight} className={styles.canvas} ref={ref}></canvas>
  )
})
