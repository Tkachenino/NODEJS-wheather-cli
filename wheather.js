import { getParams } from "./helper.js";
import { helperLog } from "./services/log.service.js";

const initApp = () => {
    const [executer, file, ...rest] = process.argv;
    const params = getParams(rest);
    if (params.h) {
        helperLog();
    }
};

initApp();