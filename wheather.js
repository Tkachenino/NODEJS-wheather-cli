import { getParams } from "./helper.js";
import { getWheather } from "./services/api.service.js";
import { errorLog, helperLog } from "./services/log.service.js";
import { saveKeyValue, DICTIONARY_WHEATHER } from "./services/storage.service.js";

const setToken = async (token) => {
    if (!token) {
        errorLog('Укажите валидный токен при помощи команды -t [TOKEN]')
        return;
    }
     try {
        await saveKeyValue(DICTIONARY_WHEATHER.token, token);
     } catch (error) {
         errorLog(error.message);
     }
}


const getForecast = async () => {
    try {
        const resp = await getWheather();
        console.log(resp);
    } catch (e) {
        if (e?.response?.status == 401) {
            errorLog('Неправильно указ токен');
        } else if (e?.response?.status == 404) {
            errorLog('Неправильно указан город');
        } else {
            errorLog(e.message);
        }
    }
}


const initApp = () => {
    const [executer, file, ...rest] = process.argv;
    const params = getParams(rest);
    if (params.h) {
        helperLog();
    }
    if (params.t) {
        setToken(params.t)
    }
     getForecast();
     
};

initApp();