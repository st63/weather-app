import React from 'react';
import { WeatherModuleOnSevenDays } from '../../components/WeatherModuleOnSevenDays';
import { WeatherModuleOfThePast } from '../../components/WeatherModuleOfThePast';
import { Flex } from './styles';

export const MainPage = () => {
  return (
    <Flex>
      <WeatherModuleOnSevenDays />
      <WeatherModuleOfThePast />
    </Flex>
  )
}