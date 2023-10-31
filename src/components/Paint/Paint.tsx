import React, { RefObject, useEffect, useRef, useState } from 'react'
import styles from './Paint.module.scss'
import {
  canvasWidth,
  maxWidthBrush,
  defaultWidthBrush,
} from '../../variables/canvasVariables'
import Slider from '@mui/material/Slider'
import { ButtonsGroup } from '@components/ButtonsGroup/ButtonsGroup'
import { ClearPaint } from './features/clearPaint'
import { TypesOfBrushes } from '@/variables/canvasTypeVariables'
import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { Canvas } from '@components/Canvas/Canvas'
import { Header } from '@components/Header/Header'
import { useImages } from '@/features/images/useImages'
import { useUserData } from '@/features/userData/useUserData'
import { typeImage } from '@/repositories/images/interfaces/imagesController'
import { Brush } from './features/tools/Brush'
import { Line } from './features/tools/Line'
import { Circle } from './features/tools/Circle'
import { Poligon } from './features/tools/Poligon'
import { Rectangle } from './features/tools/Rectangle'
import { Star} from './features/tools/Star'
import { ChangePaintSettings } from './features/changePaintSettings'

export const Paint = () => {
  const [typeBrush, setTypeBrush] = useState<TypesOfBrushes>(TypesOfBrushes.Brush)
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  const type = {
    [TypesOfBrushes.Brush]:(canvas: HTMLCanvasElement) => new Brush(canvas),
    [TypesOfBrushes.Line]:(canvas: HTMLCanvasElement) => new Line(canvas),
    [TypesOfBrushes.Circle]:(canvas: HTMLCanvasElement) => new Circle(canvas),
    [TypesOfBrushes.Poligon]:(canvas: HTMLCanvasElement) => new Poligon(canvas),
    [TypesOfBrushes.Rectangle]:(canvas: HTMLCanvasElement) => new Rectangle(canvas),
    [TypesOfBrushes.Star]:(canvas: HTMLCanvasElement) => new Star(canvas),
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      type[typeBrush](canvas)
    }
  }, [canvasRef, typeBrush])


  const clearCanvas = (canvasRef: RefObject<HTMLCanvasElement>) => { 
    const canvas = canvasRef.current
    if (canvas) {
      const clearPaint = new ClearPaint(canvas)
      clearPaint.clear()
    }
  }

  const changeColor = (canvasRef: RefObject<HTMLCanvasElement>, color: string) => { 
    const canvas = canvasRef.current
    if (canvas) {
      const changePaintSettings = new ChangePaintSettings(canvas)
      changePaintSettings.changeColor(color)
    }
  }

  const changeWidthBrush= (canvasRef: RefObject<HTMLCanvasElement>, width: number) => { 
    const canvas = canvasRef.current
    if (canvas) {
      const changePaintSettings = new ChangePaintSettings(canvas)
      changePaintSettings.changeWidthBrush(width)
    }
  }

  const handleSliderChange = (ev: Event, width: number | number[]) => changeWidthBrush(canvasRef, width as number)
  const handleInputColorChange = (color: string) => changeColor(canvasRef, color)
  const handleButtonClick = () => clearCanvas(canvasRef)
  const handleRadioGroupChange = (value: TypesOfBrushes) => setTypeBrush(value)

  const { postImage } = useImages()
  const { userData } = useUserData()

  const image: typeImage = {
    user: userData?.email,
    image: canvasRef.current?.toDataURL(),
  }

  const handleButtonPost = () => postImage(image)

  return (
    <section className={styles.paint}>
      <Header />
      <section className={styles.section}>
        <div>
          <Input onChange={handleInputColorChange} type='color' typeStyle='secondary' />
          <ButtonsGroup typeBrush={typeBrush} onChange={handleRadioGroupChange} />
        </div>
        <div className={styles.canvasSection}>
          <Canvas ref={canvasRef} />
          <div className={styles.controlPanel}>
            <Slider
              onChange={handleSliderChange}
              min={1}
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
