import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import ForecastReducer from './forecast_reducer';
import DailyReducer from './daily_reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer  ,
  forecast: ForecastReducer,
  daily: DailyReducer

});

export default rootReducer;
