import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from '../Input';
import { Select } from '../Select';
import { WeatherCard } from '../WeatherCard';
import { WrapForModule } from '../styles';
import { Title } from '../styles';
import { Flex } from '../../styles';
import { Message } from './styles';
import { CityIsNotSelectedMessage } from '../styles';

export const WeatherModuleOfThePast = (props: any) => {
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState([]);
  const [city, setCity] = useState('Select city');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (city !== 'Select city' && date !== '') {
      getWeather();
    }

    if (date !== '') {
      setMessage('');
    }
  }, [city, date]);

  async function getWeather() {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall/timemachine?${city}&dt=${date}&units=metric&appid=04160438ae6d577745ad287cda3d9bca`);
      setTemp(response.data.current.temp);
      setIcon(response.data.current.weather[0].icon);
    } catch (e) {
      alert(e);
    }
  }

  function selectCity(event: any) {
    setCity(event.target.value)
  }

  function selectDate(event: any) {
    let dateFromInput: any;
    let endOfAllowedDate = new Date().getTime() / 1000;
    endOfAllowedDate = Math.round(endOfAllowedDate);
    const startOfAllowedDate = endOfAllowedDate - 5 * 24 * 3600;

    if (event.target.value.length === 10) {
      dateFromInput = new Date(event.target.value).getTime() / 1000;
      dateFromInput = Math.round(dateFromInput)

      if (!isNaN(dateFromInput) && dateFromInput >= startOfAllowedDate && dateFromInput <= endOfAllowedDate) {
        setDate(dateFromInput + '')
      }

      if (isNaN(dateFromInput)) {
        setMessage('Пожалуйста введите дату в формате "YYYY.MM.DD".')
      }

      if (dateFromInput < startOfAllowedDate) {
        setMessage('Это очень далекая дата, можно заглянуть только на 5 дней назад.')
      }

      if (dateFromInput > endOfAllowedDate) {
        setMessage('Этот день в будущем, смотрите прогноз погоды слева.')
      }
    }
  }

  return (
    <WrapForModule {...props}>
      <Title>Какая была погода:</Title>
      <Flex>
        <Select city={city} selectCity={selectCity} />
        <Input value={date} selectDate={selectDate} />
      </Flex>
      <Message>{message}</Message>
      {city === 'Select city' || date === ''
        ? <CityIsNotSelectedMessage>Fill in all the fields and the weather will be displayed</CityIsNotSelectedMessage>
        : <WeatherCard temp={temp} icon={icon} date={date} />
      }
    </WrapForModule>
  )
}