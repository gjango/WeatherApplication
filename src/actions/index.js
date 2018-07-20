import axios from 'axios';

const API_KEY = 'e544be68e0c8d87adce93283e0f5229c';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},ge`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}