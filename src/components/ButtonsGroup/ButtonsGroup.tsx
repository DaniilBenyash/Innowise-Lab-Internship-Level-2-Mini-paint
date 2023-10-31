import FormControl from '@mui/joy/FormControl'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import { TypesOfBrushes } from '@/variables/canvasTypeVariables'
import { ChangeEvent } from 'react'

type ButtonsGroupProps = {
  typeDraw: TypesOfBrushes
  onChange: (value: TypesOfBrushes) => void
}

export const ButtonsGroup = ({ typeDraw, onChange }: ButtonsGroupProps) => {
  const arrayOfButtons = Object.entries(TypesOfBrushes)

  const handleRadioButtonClick = (ev: ChangeEvent<HTMLInputElement>) => {
    return onChange(ev.target.value as TypesOfBrushes)
  }

  return (
    <FormControl>
      <RadioGroup value={typeDraw} onChange={handleRadioButtonClick} name='radio-buttons-group'>
        {arrayOfButtons.map(([nameEvent, event]) => {
          return <Radio key={nameEvent} value={event} label={nameEvent} variant='outlined' />
        })}
      </RadioGroup>
    </FormControl>
  )
}
