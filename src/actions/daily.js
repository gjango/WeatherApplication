import axios from 'axios';

const API_KEY = 'e544be68e0c8d87adce93283e0f5229c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}`;

export const FETCH_DAILY = 'FETCH_DAILY';
const ANNAS_KEY = `https://api.openweathermap.org/data/2.5/forecast/daily?q=Tbilisi%2Cge&units=metric&appid=327f0c4e1cfb6ac8bf357744e83629d7`;

export function fetchDaily(city){
    // const url = `${ROOT_URL}&q=${city},ge&cnt=7`;
    const url = ANNAS_KEY;
    const request = axios.get(url);

    console.log('Request of daily forecast:', request);

    return {
        type: FETCH_DAILY,
        payload: request
    };
}