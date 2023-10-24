import { RefObject, useRef, useState } from 'react';
import styles from './Paint.module.scss';
import { canvasWidth, canvasHeight, maxWidthBrush, defaultWidthBrush, defaultColorBrush } from '../../variables/canvasVariables'
import Slider from '@mui/material/Slider';
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { usePaint } from './usePaint';
import { clearCanvas } from '../../features/canvasFeatures/clearCanvas';
import { enumDraw } from '../../variables/canvasTypeVariables';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import { Canvas } from '../Canvas/Canvas';

export const Paint = () => {
    const [typeDraw, setTypeDraw] = useState<enumDraw>(enumDraw.Brush)
    const [widthBrush, setWidthBrush] = useState(defaultWidthBrush)
    const [colorBrush, setColorBrush] = useState(defaultColorBrush)

    const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

    usePaint(canvasRef, typeDraw, widthBrush, colorBrush, canvasWidth, canvasHeight)
    
    const handleSliderChange = (ev: any) => setWidthBrush(ev.target.value)
    const handleInputColorChange = (ev: any) => setColorBrush(ev.target.value)
    const handleButtonClick = () => clearCanvas(canvasRef, canvasWidth, canvasHeight, colorBrush)
    const handleRadioGroupChange = (ev: any) => setTypeDraw(ev.target.value)
    
    return (
        <>
            <Canvas className={styles.paint} ref={canvasRef}/>
            <Input onChange={handleInputColorChange} type="color" />   
            <Slider onChange={handleSliderChange} max={maxWidthBrush} defaultValue={widthBrush} aria-label="Default" valueLabelDisplay="auto" sx={{width: canvasWidth}}/>
            <Button onClick={handleButtonClick} text='Clear' />
            <ButtonsGroup typeDraw={typeDraw} onChange={handleRadioGroupChange}/>
        </>
    )
}