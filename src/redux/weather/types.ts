export type Weather = {
    date: string
    temp: number
    icon: string
}

export type WeatherState = {
    list: {
        [city: string]: {
            [k: string]: Weather
        }
    }
}