interface IWeatherToDisplay {
  date: number | string
  temp: number
  icon: string
}

interface IWeather {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
}

interface IWeatherOfDay {
  temp: number
  icon: string
}

interface IMainPageState {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
  weatherOfDay: IWeatherOfDay
  isWeatherLoadedFor7Days: boolean,
  isWeatherLoadedOfDay: boolean
}

interface IWeatherBlockOnSevenDays {
  weatherForSevenDays: Array<IWeatherToDisplay>
  weatherToDisplay: Array<IWeatherToDisplay>
  thunkGetWeather(city: string, isTablet: boolean, isMobile: boolean): void
  changeWeatherToDisplayAC(weatherToDisplay: Array<IWeatherToDisplay>): void
  isWeatherLoadedFor7Days: boolean
}

interface IWeatherBlockOfThePast {
  weatherOfDay: IWeatherOfDay
  thunkGetWeatherOfDay(city: string | undefined, date: string): void
  isWeatherLoadedOfDay: boolean
}

interface IWeatherCard {
  date?: number | string
  weather: {
    temp: number
    icon: string
  }
  width: string
  heightIcon: string,
}

interface ICitySelect {
  city?: string
  selectCity(event: React.ChangeEvent<HTMLSelectElement>): void
}

interface IDateInput {
  date?: string
  selectDate(event: React.ChangeEvent<HTMLInputElement>): void
}
