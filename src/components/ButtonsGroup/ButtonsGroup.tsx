import FormControl from '@mui/joy/FormControl'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import { BrushesTypes } from '@/variables/canvasTypeVariables'
import { ChangeEvent } from 'react'

type ButtonsGroupProps = {
  brushType: BrushesTypes
  onChange: (value: BrushesTypes) => void
}

export const ButtonsGroup = ({ brushType, onChange }: ButtonsGroupProps) => {
  const arrayOfButtons = Object.entries(BrushesTypes)

  const handleRadioButtonClick = (ev: ChangeEvent<HTMLInputElement>) =>
    onChange(ev.target.value as BrushesTypes)

  return (
    <FormControl>
      <RadioGroup value={brushType} onChange={handleRadioButtonClick} name='radio-buttons-group'>
        {arrayOfButtons.map(([nameEvent, event]) => {
          return <Radio key={nameEvent} value={event} label={nameEvent} variant='outlined' />
        })}
      </RadioGroup>
    </FormControl>
  )
}
