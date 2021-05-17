import React from 'react';
import { StyledSelect, Option } from './styles';

export const Select = () => {
  return (
    <StyledSelect placeholder="Select city">
      <Option disabled selected>Select city</Option>
      <Option value="Самара">Самара</Option>
      <Option value="Тольятти">Тольятти</Option>
      <Option value="Саратов">Саратов</Option>
      <Option value="Казань">Казань</Option>
      <Option value="Краснодар">Краснодар</Option>
    </StyledSelect>
  )
}