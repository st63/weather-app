export const formatDate = (date: Date): string => date.toISOString().slice(0, 10) // "2021-05-22"

export const formatDateDisplay = (date: string | undefined): string | undefined => {
  if (date) {
    return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toLowerCase() + '' // 22 may 2021
  }
}

export const formatDateDailyWeather = (date: number): string => new Date(date * 1000).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).toLowerCase() + '' // 22 may 2021
