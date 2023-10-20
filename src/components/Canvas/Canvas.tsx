import { RefObject, useRef, useState } from 'react';
import './Canvas.scss';
import Slider from '@mui/material/Slider';
import { useDrawBrush } from './useDrawBrush';
import { useDrawLine } from './useDrawLine';
import { clearCanvas } from './clearCanvas';
import FormControl from '@mui/joy/FormControl';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

export const Canvas = () => {
    const canvasWidth = 500
    const canvasHeight = 400
    const maxWidthBrush = 20
    const defaultWidthBrush = 5
    const defaultColorBrush = '#000000'

    const [typeDraw, setTypeDraw] = useState<'useDrawBrush' | 'useDrawLine'>('useDrawBrush')
    const [widthBrush, setWidthBrush] = useState(defaultWidthBrush)
    const [colorBrush, setColorBrush] = useState(defaultColorBrush)

    const canvasRef: RefObject<HTMLCanvasElement> = useRef(null)

    const typeDrawToggle = {
        useDrawBrush: () => useDrawBrush(canvasRef, widthBrush, colorBrush),
        useDrawLine: () => useDrawLine(canvasRef, widthBrush, colorBrush)
    }
    
    typeDrawToggle[typeDraw]()
    
    const handleSliderChange = (ev: any) => setWidthBrush(ev.target.value)
    const handleInputColorChange = (ev: any) => setColorBrush(ev.target.value)
    const handleButtonClick = () => clearCanvas(canvasRef, canvasWidth, canvasHeight)
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
                <RadioGroup defaultValue={typeDraw} onChange={handleRadioGroupChange} name="radio-buttons-group">
                    <Radio value='useDrawBrush' label="Brush" variant="outlined" />
                    <Radio value='useDrawLine' label="Line" variant="outlined" />
                    <Radio value="rectangle" label="rectangle" variant="outlined" />
                    <Radio value="circle" label="circle" variant="outlined" />
                </RadioGroup>
            </FormControl>
        </>
    )
}