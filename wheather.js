import { getParams } from "./helper.js";
import { getWheather } from "./services/api.service.js";
import { errorLog, helperLog, successLog } from "./services/log.service.js";
import { saveKeyValue, getValue, DICTIONARY_WHEATHER } from "./services/storage.service.js";

const setToken = async (token) => {
    if (!token) {
        errorLog(new Error('Укажите валидный токен при помощи команды -t [TOKEN]'))
        return;
    }
     try {
        await saveKeyValue(DICTIONARY_WHEATHER.token, token);
        const saveData = await getValue(DICTIONARY_WHEATHER.token);
        successLog(`Ваши данные (${saveData}) сохранены`);
     } catch (error) {
         errorLog(error);
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
     getWheather().then(res => console.log(res));
     
};

initApp();