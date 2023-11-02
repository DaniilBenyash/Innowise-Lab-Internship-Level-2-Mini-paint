import { RefObject, useRef, useState, useEffect } from 'react'
import styles from './Paint.module.scss'
import {
  canvasWidth,
  maxWidthBrush,
  defaultWidthBrush,
  defaultColorBrush,
} from '../../variables/canvasVariables'
import Slider from '@mui/material/Slider'
import { ButtonsGroup } from '@components/ButtonsGroup/ButtonsGroup'
import { TypesOfBrushes } from '@/variables/canvasTypeVariables'
import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { Canvas } from '@components/Canvas/Canvas'
import { Header } from '@components/Header/Header'
import { useImages } from '@/features/images/useImages'
import { useUserData } from '@/features/userData/useUserData'
import { typeImage } from '@/repositories/images/interfaces/imagesController'
import { createPaint } from './features/createPaint'

export const Paint = () => {
  const [typeBrush, setTypeBrush] = useState<TypesOfBrushes>(TypesOfBrushes.Brush)
  const [widthBrush, setWidthBrush] = useState(defaultWidthBrush)
  const [colorBrush, setColorBrush] = useState(defaultColorBrush)
  const [clearPaint, setClearPaint] = useState(false)
  const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current

    if(!canvas) return

    const paint = createPaint(canvas, typeBrush)

    paint.changeColor(colorBrush)
    paint.changeWidthBrush(widthBrush)
    if (clearPaint) paint.clearPaint()

    return () => {
      setClearPaint(false)
      paint?.removeEventListeners()
    }
  }, [canvasRef, typeBrush, colorBrush, widthBrush, clearPaint])

  const handleSliderChange = (ev: Event, width: number | number[]) => setWidthBrush(width as number)
  const handleInputColorChange = (color: string) => setColorBrush(color)
  const handleButtonClick = () => setClearPaint(true)
  const handleRadioGroupChange = (value: TypesOfBrushes) => setTypeBrush(value)

  const { postImage } = useImages()
  const { userData } = useUserData()

  const post = (canvasRef: RefObject<HTMLCanvasElement>) => {
    const canvas = canvasRef.current

    if (!canvas) return

    const image: typeImage = {
      user: userData?.email,
      image: canvas.toDataURL(),
    }

    postImage(image)
  }
  const handleButtonPost = () => post(canvasRef)

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
              defaultValue={widthBrush}
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
