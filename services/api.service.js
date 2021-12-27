import https from 'https';
import axios from 'axios';
import { errorLog } from './log.service.js';
import { getValue, DICTIONARY_WHEATHER } from './storage.service.js';

const url = 'https://api.openweathermap.org/data/2.5/weather';

const getWheatherByHttps = async (city = 'Nizhniy Novgorod') => {
    const token = await getValue(DICTIONARY_WHEATHER.token);
    if (!token) {
        errorLog('Токен не обноружен!!!');
        return;
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    url.searchParams.append('q', city);
    url.searchParams.append('appid', token);

    url.searchParams.append('units', 'metric');
    url.searchParams.append('lang', 'ru');
    https.get(url, (res) => {
        let result = '';
        res.on('data', (chank) => {
            result += chank;
        });

        res.on('end', () => {
            console.log(JSON.parse(result));
        })
    });
}

const getWheather = async (city = 'Nizhniy Novgorod') => {
    const token = await getValue(DICTIONARY_WHEATHER.token);
    if (!token) {
        errorLog('Токен не обноружен!!!');
        return;
    }
    const {data} = await axios.get(url, {
        params: {
            q: process.env.CITY,
            appid: process.env.TOKEN ?? token,
            units: 'metric',
            lang: 'ru'
        }
    });
    return data;
}


export { getWheather };


