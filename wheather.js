import { getParams } from "./helper.js";
import { errorLog, helperLog, successLog } from "./services/log.service.js";
import { saveKeyValue, getValue } from "./services/storage.service.js";

const setToken = async (token) => {
     try {
        await saveKeyValue('token', token);
        const saveData = await getValue('token');
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
};

initApp();