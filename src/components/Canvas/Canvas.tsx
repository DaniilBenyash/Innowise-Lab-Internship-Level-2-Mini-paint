import { RefObject, useRef, useState } from 'react';
import './Canvas.scss';
import { canvasWidth, canvasHeight, maxWidthBrush, defaultWidthBrush, defaultColorBrush } from '../../variables/canvasVariables'
import Slider from '@mui/material/Slider';
import { ButtonsGroup } from '../ButtonsGroup/ButtonsGroup';
import { useCanvas } from './useCanvas';
import { clearCanvas } from '../../features/canvasFeatures/clearCanvas';
import { enumDraw } from '../../variables/canvasTypeVariables';

export const Canvas = () => {
    const [typeDraw, setTypeDraw] = useState<enumDraw>(enumDraw.Brush)
    const [widthBrush, setWidthBrush] = useState(defaultWidthBrush)
    const [colorBrush, setColorBrush] = useState(defaultColorBrush)

    const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

    useCanvas(canvasRef, typeDraw, widthBrush, colorBrush, canvasWidth, canvasHeight)
    
    const handleSliderChange = (ev: any) => setWidthBrush(ev.target.value)
    const handleInputColorChange = (ev: any) => setColorBrush(ev.target.value)
    const handleButtonClick = () => clearCanvas(canvasRef, canvasWidth, canvasHeight, colorBrush)
    const handleRadioGroupChange = (ev: any) => setTypeDraw(ev.target.value)

    return (
        <>
            <canvas 
                width={canvasWidth} 
                height={canvasHeight} 
                className='canvas'
                ref={canvasRef}
            >
            </canvas>
            <input onChange={handleInputColorChange} type="color" />   
            <Slider onChange={handleSliderChange} max={maxWidthBrush} defaultValue={widthBrush} aria-label="Default" valueLabelDisplay="auto" sx={{width: canvasWidth}}/>
            <button onClick={handleButtonClick}>Clear</button>
            <ButtonsGroup typeDraw={typeDraw} onChange={handleRadioGroupChange}/>
        </>
    )
}