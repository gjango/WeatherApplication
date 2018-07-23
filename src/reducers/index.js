import { combineReducers } from 'redux';
import WeatherReducer from './weather';
import ForecastReducer from './forecast_reducer';

const rootReducer = combineReducers({
  weather: WeatherReducer  ,
  forecast: ForecastReducer
});

export default rootReducer;
