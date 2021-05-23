import { useState } from 'react'

export const useWeatherFields = () => {
  const [city, setCity] = useState<string>()
  const selectCity = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCity(event.target.value)
  }

  const [date, setDate] = useState<string>()
  const selectDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value)
  }

  return {
    city,
    selectCity,
    date,
    selectDate
  }
}


