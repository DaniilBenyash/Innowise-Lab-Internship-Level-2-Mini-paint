import React, { RefObject, useRef, useState } from 'react'
import styles from './Paint.module.scss'
import {
  canvasWidth,
  canvasHeight,
  maxWidthBrush,
  defaultWidthBrush,
  defaultColorBrush,
} from '../../variables/canvasVariables'
import Slider from '@mui/material/Slider'
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup'
import { usePaint } from './usePaint'
import { clearCanvas } from '../../features/canvasFeatures/clearCanvas'
import { enumDraw } from '../../variables/canvasTypeVariables'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import { Canvas } from '../Canvas/Canvas'
import { Header } from '../Header/Header'
import { useImages } from '../../features/images/useImages'
import { useUserData } from '../../features/userData/useUserData'
import { typeImage } from '../../repositories/images/interfaces/imagesController'

export const Paint = () => {
  const [typeDraw, setTypeDraw] = useState<enumDraw>(enumDraw.Brush)
  const [widthBrush, setWidthBrush] = useState(defaultWidthBrush)
  const [colorBrush, setColorBrush] = useState(defaultColorBrush)

  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  usePaint(canvasRef, typeDraw, widthBrush, colorBrush, canvasWidth, canvasHeight)

  const handleSliderChange = (ev: Event, value: number | number[]) => setWidthBrush(value as number)

  const handleInputColorChange = (color: string) => setColorBrush(color)
  const handleButtonClick = () => clearCanvas(canvasRef, canvasWidth, canvasHeight, colorBrush)
  const handleRadioGroupChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setTypeDraw(ev.target.value as enumDraw)
  }

  const { postImage } = useImages()
  const { userData } = useUserData()

  const image: typeImage = {
    user: userData?.email,
    image: canvasRef.current?.toDataURL(),
  }
  const handleButtonPost = () => {
    postImage(image)
  }

  return (
    <section className={styles.paint}>
      <Header />
      <section className={styles.section}>
        <div>
          <Input onChange={handleInputColorChange} type='color' typeStyle='secondary' />
          <ButtonsGroup typeDraw={typeDraw} onChange={handleRadioGroupChange} />
        </div>
        <div className={styles.canvasSection}>
          <Canvas className={styles.canvas} ref={canvasRef} />
          <div className={styles.controlPanel}>
            <Slider
              onChange={handleSliderChange}
              max={maxWidthBrush}
              defaultValue={defaultWidthBrush}
              aria-label='Default'
              valueLabelDisplay='auto'
              sx={{ width: canvasWidth / 2 }}
            />
            <Button type='secondary' onClick={handleButtonClick} text='Clear' />
            <Button type='primary' onClick={handleButtonPost} text='Post' />
          </div>
        </div>
      </section>
    </section>
  )
}
