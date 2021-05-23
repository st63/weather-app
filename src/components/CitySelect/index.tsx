import React from 'react'
import { Select, Option } from './styles'

import { CITIES, City } from '../../config'

const renderCity = ({ value, name }: City) => <Option key={value} value={value}>{name}</Option>

export const CitySelect: React.FC<ICitySelect> = ({ city, selectCity }) => (
  <Select value={city} onChange={selectCity} placeholder="Select city" isCitySelected={!!city}>
    <Option selected={!city} disabled>Select city</Option>
    {CITIES.map(renderCity)}
  </Select>
)
