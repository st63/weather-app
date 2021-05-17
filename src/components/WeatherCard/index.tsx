import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/ru';
import { StyledWeatherCard } from './styles';
import { Date, Degrees, Icon } from './styles';

export const WeatherCard = (props: any) => {
  const date = props.day?.dt || props.date;
  const temperature = Math.round(props.day?.temp.day) || Math.round(props.temp);
  const icon = props.day?.weather[0].icon || props.icon;

  return (
    <StyledWeatherCard>
      <Date><Moment unix format="D MMM YYYY" locale="ru">{date}</Moment></Date>
      <Degrees>{temperature}°C</Degrees>
      <Icon src={`http://openweathermap.org/img/wn/${icon}.png`} />
    </StyledWeatherCard>
  )
}
