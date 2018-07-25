import axios from 'axios';

const API_KEY = 'e544be68e0c8d87adce93283e0f5229c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_FORECAST = 'FETCH_FORECAST';

export function fetchForecast(city){
    const url = `${ROOT_URL}&q=${city},ge&units=metric`;
    const request = axios.get(url);

    console.log('Request of forecast:', request);

    return {
        type: FETCH_FORECAST,
        payload: request
    };
}