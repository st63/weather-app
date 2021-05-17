import React from 'react';
import { StyledSelect, Option } from './styles';

export const Select = ({ city, selectCity }: any) => {
  return (
    <StyledSelect value={city} onChange={selectCity} placeholder="Select city">
      <Option disabled selected>Select city</Option>
      <Option value="lat=53.19&lon=50.10">Самара</Option>
      <Option value="lat=53.50&lon=49.42">Тольятти</Option>
      <Option value="lat=51.53&lon=46.03">Саратов</Option>
      <Option value="lat=55.79&lon=49.10">Казань</Option>
      <Option value="lat=45.03&lon=38.97">Краснодар</Option>
    </StyledSelect>
  )
}