import React from 'react'
import { Input } from './styles'
import { formatDate } from '../../utils'

export const DateInput: React.FC<IDateInput> = ({ date, selectDate }) => {
  const [type, changeType] = React.useState('text')

  const setFieldToDate = () => {
    if (type !== 'date') {
      changeType('date')
    }
  }

  const setFieldToText = () => {
    if (!date && type !== 'text') {
      changeType('text')
    }
  }

  const today = new Date()

  const minDate: string = formatDate(new Date(new Date().setDate(today.getDate() - 5)))
  const maxDate: string = formatDate(today)

  return (
    <Input
      onChange={selectDate}
      onFocus={setFieldToDate}
      onBlur={setFieldToText}
      onKeyDown={() => {}}
      type={type}
      min={minDate}
      max={maxDate}
      value={date}
      placeholder="Select date"
      required
    />
  )
}
