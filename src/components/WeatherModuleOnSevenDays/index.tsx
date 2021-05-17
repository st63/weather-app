import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select } from '../Select';
import { WeatherCard } from '../WeatherCard';
import { WrapForModule } from '../styles';
import { Title } from '../styles';
import { Flex } from '../../styles';
import { ArrowLeft, ArrowRight } from './styles';
import { CityIsNotSelectedMessage } from '../styles';

export const WeatherModuleOnSevenDays = () => {
  const [weatherForSevenDays, setWeatherForSevenDays] = useState([]);
  const [weatherForThreeDays, setWeatherForThreeDays] = useState([]);
  const [position, setPosition] = useState(0);
  const [city, setCity] = useState('Select city');

  useEffect(() => {
    if (city !== 'Select city') {
      getWeather();
    }
  }, [city]);

  async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?${city}&exclude=current,minutely,hourly,alerts&units=metric&appid=04160438ae6d577745ad287cda3d9bca`);
      // @ts-ignore
      const weatherToDisplay = response.data.daily.filter(function (item, index, array) {
        return (index < 3);
      });
      setWeatherForThreeDays(weatherToDisplay);
      setWeatherForSevenDays(response.data.daily);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    changeDisplayWeather();
  }, [position]);

  function changeDisplayWeather() {
    const weatherToDisplay = weatherForSevenDays.filter(function (item, index, array) {
      return (index >= position && index < position + 3);
    });
    setWeatherForThreeDays(weatherToDisplay);
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

  return (
    <WrapForModule>
      <Title>Прогноз погоды на 7 дней:</Title>
      <Select city={city} selectCity={selectCity} />
      {city === 'Select city'
        ? <CityIsNotSelectedMessage>Fill in all the fields and the weather will be displayed</CityIsNotSelectedMessage>
        : <Flex>
            <ArrowLeft disabled={position === 0} onClick={reducePosition} />
            {weatherForThreeDays.map(day => <WeatherCard day={day} />)}
            <ArrowRight disabled={position === 5} onClick={increasePosition} />
          </Flex>
      }
    </WrapForModule>
  )
}