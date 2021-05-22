import React from 'react'
import { Select, Option } from './styles'
import { ICitySelect } from '../../types'

export const CitySelect: React.FC<ICitySelect> = ({ city, selectCity, isCitySelected }) => {
  return (
    <Select value={city} onChange={selectCity} placeholder="Select city" defaultValue='Select city' isCitySelected={isCitySelected}>
      <Option disabled>Select city</Option>
      <Option value="lat=53.19&lon=50.10">Samara</Option>
      <Option value="lat=53.50&lon=49.42">Toliatty</Option>
      <Option value="lat=51.53&lon=46.03">Saratov</Option>
      <Option value="lat=55.79&lon=49.10">Kazan</Option>
      <Option value="lat=45.03&lon=38.97">Krasnodar</Option>
    </Select>
  )
}