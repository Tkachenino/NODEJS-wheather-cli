import { homedir } from "os";
import { join } from "path";
import {promises} from "fs";

const DICTIONARY_WHEATHER = {
    city: 'city',
    token: 'token'
}

const filePath = join(homedir(), 'wheather-data.json');

const saveKeyValue =  async (key, value) => {
    let data = {};
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        data = JSON.parse(file);
    }

    data[key] = value;
    await promises.writeFile(filePath, JSON.stringify(data));
};

const getValue = async (key) => {
    if (await isExist(filePath)) {
        const file = await promises.readFile(filePath);
        const data = JSON.parse(file);
        return data[key];
    } else {
        return undefined;
    }
}

const isExist = async (path) => {
    try {
        await promises.stat(path);
        return true;
    } catch (error) {
        return false;
    }
}

export { saveKeyValue, getValue, DICTIONARY_WHEATHER };