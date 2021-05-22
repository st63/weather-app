import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { DateInput } from '../Input'
import { CitySelect } from '../CitySelect'
import { WeatherCard } from '../WeatherCard'
import { WeatherBlock, WeatherTitle, EmptyWeatherBlock, EmptyWeatherIcon, EmptyWeatherPlaceholder } from '../styles'
import { WeatherSelectBlock } from './styles'
import { thunkGetWeatherOfDay } from '../../redux/mainPage/actions'
import { AppStateType } from '../../redux/store'
import { IWeatherBlockOfThePast } from '../../types'
import placeholderIcon from '../../images/placeholder-icon.svg'

const WeatherBlockOfThePast: FC<IWeatherBlockOfThePast> = ({ thunkGetWeatherOfDay, weatherOfDay }) => {
  const [city, setCity] = useState<string | undefined>()
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    if (city && date !== '') {
      thunkGetWeatherOfDay(city, date)
    }
  }, [city, date]) // eslint-disable-line react-hooks/exhaustive-deps

  const selectCity = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCity(event.target.value)
  }

  const selectDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let dateFromInput: number = new Date(event.target.value).getTime() / 1000
    dateFromInput = Math.round(dateFromInput)
    alert(event.target.value)

    setDate(dateFromInput + '')
  }

  const isCitySelected: boolean = city !== undefined

  return (
    <WeatherBlock>
      <WeatherTitle>Forecast for a Date in the Past</WeatherTitle>
      <WeatherSelectBlock>
        <CitySelect city={city} selectCity={selectCity} isCitySelected={isCitySelected} />
        <DateInput selectDate={selectDate} />
      </WeatherSelectBlock>
      {!city || date === ''
        ? <EmptyWeatherBlock>
          <EmptyWeatherIcon src={placeholderIcon}></EmptyWeatherIcon>
          <EmptyWeatherPlaceholder>Fill in all the fields and the weather will be displayed</EmptyWeatherPlaceholder>
        </EmptyWeatherBlock>
        : <WeatherCard date={date} temp={weatherOfDay.temp} icon={weatherOfDay.icon} heightIcon={'146px'} width={'543px'} />
      }
    </WeatherBlock>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  weatherOfDay: state.mainPage.weatherOfDay
})

export default connect(mapStateToProps, { thunkGetWeatherOfDay })(WeatherBlockOfThePast)
