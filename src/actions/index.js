import axios from "axios"

const API_KEY = "e544be68e0c8d87adce93283e0f5229c"
const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
const ROOT_MULTIPLE_URL = `http://api.openweathermap.org/data/2.5/group?appid=${API_KEY}`

export const FETCH_WEATHER = "FETCH_WEATHER"
export const FETCH_MULTIPLE_WEATHER = "FETCH_MULTIPLE_WEATHER"

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ge&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function fetchMultipleWeather(cities) {
  const url = `${ROOT_MULTIPLE_URL}&id=${cities.join(",")}&units=metric`
  const request = axios.get(url)

  return {
    type: FETCH_MULTIPLE_WEATHER,
    payload: request
  }
}
