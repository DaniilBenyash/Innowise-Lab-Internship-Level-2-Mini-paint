import FormControl from '@mui/joy/FormControl'
import Radio from '@mui/joy/Radio'
import RadioGroup from '@mui/joy/RadioGroup'
import { ChangeEvent } from 'react'

type ButtonsGroupProps = {
  list: [string, string][]
  onChange: (value: string) => void
  currentValue: string
}

export const ButtonsGroup = ({ list, onChange, currentValue }: ButtonsGroupProps) => {
  const handleRadioButtonClick = (ev: ChangeEvent<HTMLInputElement>) => onChange(ev.target.value)

  return (
    <FormControl>
      <RadioGroup value={currentValue} onChange={handleRadioButtonClick} name='radio-buttons-group'>
        {list.map(([nameEvent, event]) => {
          return <Radio key={nameEvent} value={event} label={nameEvent} variant='outlined' />
        })}
      </RadioGroup>
    </FormControl>
  )
}
