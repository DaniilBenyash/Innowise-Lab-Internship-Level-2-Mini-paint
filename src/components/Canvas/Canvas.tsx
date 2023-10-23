import { RefObject, useRef, useState } from 'react';
import './Canvas.scss';
import Slider from '@mui/material/Slider';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { useCanvas } from './useCanvas';
import { clearCanvas } from '../../canvasFeatures/clearCanvas';

export type typeDraw = 'brushDraw' | 'lineDraw' | 'rectangleDraw'

export const Canvas = () => {
    const canvasWidth = 500
    const canvasHeight = 400
    const maxWidthBrush = 20
    const defaultWidthBrush = 5
    const defaultColorBrush = '#000000'

    const [typeDraw, setTypeDraw] = useState<typeDraw>('brushDraw')
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
            <FormControl>
                <RadioGroup value={typeDraw} onChange={handleRadioGroupChange} name="radio-buttons-group">
                    <Radio value='brushDraw' label="Brush" variant="outlined" />
                    <Radio value='lineDraw' label="Line" variant="outlined" />
                    <Radio value="rectangleDraw" label="Rectangle" variant="outlined" />
                    <Radio value="circle" label="circle" variant="outlined" />
                </RadioGroup>
            </FormControl>
        </>
    )
}