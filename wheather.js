import { getParams } from "./helper.js";

const initApp = () => {
    
    const [executer, file, ...rest] = process.argv;

    const params = getParams(rest);
    console.log(params);
};

initApp();