import React, { FC, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useMediaQuery } from 'beautiful-react-hooks'
import { CitySelect } from '../CitySelect'
import { WeatherCard } from '../WeatherCard'
import { WeatherBlock, WeatherTitle, EmptyWeatherBlock, EmptyWeatherIcon, EmptyWeatherPlaceholder } from '../styles'
import { WeatherContentWrapper, ArrowControlLeft, ArrowControlRight } from './styles'
import { thunkGetWeather, changeWeatherToDisplayAC } from '../../redux/mainPage/actions'
import { IWeatherBlockOnSevenDays, IWeatherToDisplay } from '../../types'
import { AppStateType } from '../../redux/store'
import placeholderIcon from '../../images/placeholder-icon.svg'

const WeatherBlockOnSevenDays: FC<IWeatherBlockOnSevenDays> = ({ weatherForSevenDays, weatherToDisplay, thunkGetWeather, changeWeatherToDisplayAC, isWeatherLoadedFor7Days }) => {
  const [position, setPosition] = useState<number>(0)
  const [city, setCity] = useState<string | undefined>()
  const isTablet: boolean = useMediaQuery('(max-width: 730px) and (min-width: 360px)')
  const isMobile: boolean = useMediaQuery('(max-width: 359px)')

  useEffect(() => {
    if (city) {
      thunkGetWeather(city, isTablet, isMobile)
      setPosition(0)
    }
  }, [city, isTablet, isMobile]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    changeDisplayWeather()
  }, [position]) // eslint-disable-line react-hooks/exhaustive-deps

  const changeDisplayWeather = (): void => {
    let weatherToDisplay: Array<IWeatherToDisplay> = []

    if (!isTablet) {
      weatherToDisplay = weatherForSevenDays.filter((item: object, index: number) => index >= position && index < position + 3)
    }

    if (isTablet) {
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

  const disabledBtnOnDesctop: boolean = position === 5 && !isTablet
  const disabledBtnOnMobile: boolean = position === 7 && isTablet
  const isCitySelected: boolean = city !== undefined

  return (
    <WeatherBlock>
      <WeatherTitle>7 Days Forecast</WeatherTitle>
      <CitySelect city={city} selectCity={selectCity} isCitySelected={isCitySelected} />
      {isWeatherLoadedFor7Days
        ? <WeatherContentWrapper>
            <ArrowControlLeft disabled={position === 0} onClick={reducePosition} />
            {weatherToDisplay.map((day: IWeatherToDisplay, index: number) => <WeatherCard key={index} date={day?.date} temp={day?.temp} icon={day?.icon} heightIcon={'115px'} width={'174px'} />)}
            <ArrowControlRight disabled={disabledBtnOnDesctop || disabledBtnOnMobile} onClick={increasePosition} />
        </WeatherContentWrapper>
        : <EmptyWeatherBlock>
          <EmptyWeatherIcon src={placeholderIcon}></EmptyWeatherIcon>
          <EmptyWeatherPlaceholder>Fill in all the fields and the weather will be displayed</EmptyWeatherPlaceholder>
        </EmptyWeatherBlock>
      }
    </WeatherBlock>
  )
}

const mapStateToProps = (state: AppStateType) => ({
  weatherForSevenDays: state.mainPage.weatherForSevenDays,
  weatherToDisplay: state.mainPage.weatherToDisplay,
  isWeatherLoadedFor7Days: state.mainPage.isWeatherLoadedFor7Days
})

export default connect(mapStateToProps, { thunkGetWeather, changeWeatherToDisplayAC })(WeatherBlockOnSevenDays)
