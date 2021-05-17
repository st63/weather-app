import React from 'react';
import { Input } from '../Input';
import { Select } from '../Select';
import { WeatherCard } from '../WeatherCard';
import { WrapForModule } from '../styles';
import { Title } from '../styles';
import { Flex } from '../../styles';

export const WeatherModuleOfThePast = () => {
  // const [temp, setTemp] = useState(0);
  // const [icon, setIcon] = useState([]);

  // useEffect(() => {
  //   getWeather();
  // }, []);

  // async function getWeather() {
  //   try {
  //     const response = await axios.get(`http://api.openweathermap.org/data/2.5/onecall/timemachine?lat=60.99&lon=30.9&dt=1620808658&units=metric&appid=04160438ae6d577745ad287cda3d9bca`);
  //     setTemp(response.data.current.temp);
  //     setIcon(response.data.current.weather);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }
  return (
    <WrapForModule>
      <Title>Какая была погода:</Title>
      <Flex>
        <Select />
        <Input />
      </Flex>
      <WeatherCard />
    </WrapForModule>
  )
}