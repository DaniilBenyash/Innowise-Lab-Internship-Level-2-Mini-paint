import FormControl from '@mui/joy/FormControl'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import { enumDraw } from '../../variables/canvasTypeVariables'
import { ChangeEvent } from 'react'

type ButtonsGroupProps = {
  typeDraw: enumDraw
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const ButtonsGroup = ({ typeDraw, onChange }: ButtonsGroupProps) => {
  const arrayOfButtons = Object.entries(enumDraw)

  return (
    <FormControl>
      <RadioGroup value={typeDraw} onChange={onChange} name='radio-buttons-group'>
        {arrayOfButtons.map(([nameEvent, event]) => {
          return <Radio key={nameEvent} value={event} label={nameEvent} variant='outlined' />
        })}
      </RadioGroup>
    </FormControl>
  )
}
