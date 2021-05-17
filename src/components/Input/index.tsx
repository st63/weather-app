import React from 'react';
import { StyledInput } from './styles';

export const Input = ({ date, selectDate }: any) => {
  return (
    <StyledInput value={date} onChange={selectDate} type="text" placeholder="Select date" />
  )
}