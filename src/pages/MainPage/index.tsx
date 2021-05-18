import React from 'react';
import { WeatherModuleOnSevenDays } from '../../components/WeatherModuleOnSevenDays';
import { WeatherModuleOfThePast } from '../../components/WeatherModuleOfThePast';
import { Flex } from './styles';
import { Border } from './styles';

export const MainPage = (props: any) => {
  return (
    <Flex {...props}>
      <WeatherModuleOnSevenDays />
      <Border />
      <WeatherModuleOfThePast />
    </Flex>
  )
}