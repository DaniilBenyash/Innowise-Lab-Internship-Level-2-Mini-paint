import { useCallback, useState } from 'react'
import styles from './Paint.module.scss'
import { canvasWidth, maxWidthBrush, defaultWidthBrush } from '../../variables/canvasVariables'
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
import { typesBrushes } from './features/typesBrushes'
import { CanvasСontroller } from './features/CanvasController'

export const Paint = () => {
  const [typeBrush, setTypeBrush] = useState<TypesOfBrushes>(TypesOfBrushes.Brush)

  const canvasController = CanvasСontroller.getInstance()

  const canvasRef = useCallback(
    (canvas: HTMLCanvasElement) => {
      canvasController.setCanvas(canvas)
      const cnv = canvasController.getCanvas

      if (!cnv) return

      canvasController.setCurrentTool(typesBrushes[typeBrush](cnv))
    },
    [typeBrush],
  )

  const handleSliderChange = (ev: Event, width: number | number[]) =>
    canvasController.changeWidthBrush(width as number)
  const handleInputColorChange = (color: string) => canvasController.changeColor(color)
  const handleButtonClick = () => canvasController.clearPaint()
  const handleRadioGroupChange = (value: TypesOfBrushes) => setTypeBrush(value)

  const { postImage } = useImages()
  const { userData } = useUserData()

  const handleButtonPost = () => {
    const canvas = canvasController.getCanvas
    if (!canvas) return

    const image: typeImage = {
      user: userData?.email,
      image: canvas.toDataURL(),
    }

    postImage(image)
  }

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
