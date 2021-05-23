import React, { FC, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { saveWeather, saveWeathers } from '../../redux/weather/actions'
import { withWeatherList } from '../../redux/weather/selectors'
import { getWeatherOfDay, getWeather } from '../../api'


export const useWeatherFields = () => {
    const [city, setCity] = useState<string>()
    const selectCity = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        setCity(event.target.value)
    }

    const [date, setDate] = useState<string>()
    const selectDate = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setDate(event.target.value)
    }

    return {
        city,
        selectCity,
        date,
        selectDate,
    }
}

export const useWeatherOfDayApi = (city?: string, date?: string, cached?: boolean) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (city && date && !cached) {
            getWeatherOfDay(city, date).then(d => dispatch(saveWeather(d)))
        }
    }, [city, date])
}

export const useWeatherListApi = (city?: string) => {
    const dispatch = useDispatch()

    useEffect(() => {
        if (city) {
            getWeather(city).then(d => dispatch(saveWeathers(d)))
        }
    }, [city])
}

export const useWeatherByDate = () => {
    const { city, selectCity, date, selectDate } = useWeatherFields()
    const weatherList = useSelector(withWeatherList)
    // @ts-ignore
    const weather = city && date && weatherList?.[city]?.[date]

    useWeatherOfDayApi(city, date, !!weather)

    return { weather, city, selectCity, date, selectDate }
}
