import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'beautiful-react-hooks'
import { CitySelect } from '../CitySelect'
import { WeatherCard } from '../WeatherCard'
import { WeatherBlock, WeatherTitle } from '../styles'
import { WeatherContentWrapper, ArrowControlLeft, ArrowControlRight } from './styles'
import { thunkGetWeather, changeWeatherToDisplayAC } from '../../redux/mainPage/actions'
import { IWeatherBlockOnSevenDays, IWeatherToDisplay } from '../../types'
import { AppStateType } from '../../redux/store'

const WeatherBlockOnSevenDays: FC<IWeatherBlockOnSevenDays> = ({ weatherForSevenDays, weatherToDisplay, thunkGetWeather, changeWeatherToDisplayAC }) => {
  const [position, setPosition] = useState<number>(0)
  const [city, setCity] = useState<string | undefined>()
  const isMobile: boolean = useMediaQuery('(max-width: 768px)')

  useEffect(() => {
    if (city) {
      thunkGetWeather(city, isMobile)
      setPosition(0)
    }
  }, [city, isMobile]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    changeDisplayWeather()
  }, [position]) // eslint-disable-line react-hooks/exhaustive-deps

  const changeDisplayWeather = (): void => {
    let weatherToDisplay: Array<IWeatherToDisplay> = []

    if (!isMobile) {
      weatherToDisplay = weatherForSevenDays.filter((item: object, index: number) => index >= position && index < position + 3)
    }

    if (isMobile) {
      weatherToDisplay = [weatherForSevenDays[position]]
    }

    changeWeatherToDisplayAC(weatherToDisplay)
  }

  const increasePosition = (): void => {
    setPosition(position + 1)
  }

  const reducePosition = (): void => {
    setPosition(position - 1)
  }

  const selectCity = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setCity(event.target.value)
  }

  const disabledBtnOnDesctop: boolean = position === 5 && !isMobile
  const disabledBtnOnMobile: boolean = position === 7 && isMobile

  return (
    <WeatherBlock>
      <WeatherTitle>Прогноз погоды на 7 дней:</WeatherTitle>
      <CitySelect city={city} selectCity={selectCity} />
      {!city
        ? <div>Fill in all the fields and the weather will be displayed</div>
        : <WeatherContentWrapper>
          <ArrowControlLeft disabled={position === 0} onClick={reducePosition} />
          {weatherToDisplay.map((day: IWeatherToDisplay, index: number) => <WeatherCard key={index} date={day.date} temp={day.temp} icon={day.icon} />)}
          <ArrowControlRight disabled={disabledBtnOnDesctop || disabledBtnOnMobile} onClick={increasePosition} />
        </WeatherContentWrapper>
      }
    </WeatherBlock>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  weatherForSevenDays: state.mainPage.weatherForSevenDays,
  weatherToDisplay: state.mainPage.weatherToDisplay
})

export default connect(mapStateToProps, { thunkGetWeather, changeWeatherToDisplayAC })(WeatherBlockOnSevenDays)
