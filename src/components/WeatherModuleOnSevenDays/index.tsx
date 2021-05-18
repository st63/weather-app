import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useMediaQuery } from 'beautiful-react-hooks';
import { Select } from '../Select';
import { WeatherCard } from '../WeatherCard';
import { WrapForModule } from '../styles';
import { Title } from '../styles';
import { Flex } from '../styles';
import { ArrowLeft, ArrowRight } from './styles';
import { CityIsNotSelectedMessage } from '../styles';

export const WeatherModuleOnSevenDays = (props: any) => {
  const [weatherForSevenDays, setWeatherForSevenDays] = useState([]);
  const [weatherToDisplay, setWeatherToDisplay] = useState([]);
  const [position, setPosition] = useState(0);
  const [city, setCity] = useState('Select city');
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (city !== 'Select city') {
      getWeather();
      setPosition(0);
    } 
  }, [city, isMobile]);

  async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,hourly,alerts&units=metric&appid=04160438ae6d577745ad287cda3d9bca`);
      if (!isMobile) {
        // @ts-ignore
        const weatherToDisplayForThreeDays = response.data.daily.filter(function (item, index, array) {
          return (index < 3);
        });
        setWeatherToDisplay(weatherToDisplayForThreeDays);
      }
      if (isMobile) {
        const oneCardToDisplay = [response.data.daily[0]];
        // @ts-ignore
        setWeatherToDisplay(oneCardToDisplay);
      }
      setWeatherForSevenDays(response.data.daily);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    changeDisplayWeather();
  }, [position]);

  function changeDisplayWeather() {
    let weatherToDisplay: any;
    if (!isMobile) {
      weatherToDisplay = weatherForSevenDays.filter(function (item, index, array) {
        return (index >= position && index < position + 3);
      });
    }
    if (isMobile) {
      weatherToDisplay = [weatherForSevenDays[position]]
    }
    setWeatherToDisplay(weatherToDisplay);
  }

  function increasePosition() {
    setPosition(position + 1);
  }

  function reducePosition() {
    setPosition(position - 1);
  }

  function selectCity(event: any) {
    setCity(event.target.value)
  }

  const disabledBtnOnDesctop: boolean = position === 5 && !isMobile;
  const disabledBtnOnMobile: boolean = position === 7 && isMobile;

  return (
    <WrapForModule  {...props}>
      <Title>Прогноз погоды на 7 дней:</Title>
      <Select city={city} selectCity={selectCity} />
      {city === 'Select city'
        ? <CityIsNotSelectedMessage>Fill in all the fields and the weather will be displayed</CityIsNotSelectedMessage>
        : <Flex {...props}>
            <ArrowLeft disabled={position === 0} onClick={reducePosition} />
          {weatherToDisplay.map(day => <WeatherCard day={day} />)}
          <ArrowRight disabled={disabledBtnOnDesctop || disabledBtnOnMobile} onClick={increasePosition} />
          </Flex>
      }
    </WrapForModule>
  )
}