import { combineReducers } from "redux"
import weatherReducer from "./weather"
import multipleWeatherReducer from "./multipleWeather"
import forecastReducer from "./forecastReducer"
import dailyReducer from "./dailyReducer"

const rootReducer = combineReducers({
  weather: weatherReducer,
  multipleWeather: multipleWeatherReducer,
  forecast: forecastReducer,
  daily: dailyReducer
})

export default rootReducer
