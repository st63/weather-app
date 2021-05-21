import React from 'react'
import moment from 'moment'
import { Input } from './styles'
import { IDateInput } from '../../types'

export const DateInput: React.FC<IDateInput> = ({ selectDate }) => {
  const startOfAllowedDate: string = moment().add(-5, 'd').format('YYYY-MM-DD')
  const endOfAllowedDate: string = moment().format('YYYY-MM-DD')

  return (
    <Input
      onChange={selectDate}
      onKeyDown={() => false}
      type="date"
      min={startOfAllowedDate}
      max={endOfAllowedDate}
      placeholder="Select date"
      required />
  )
}
