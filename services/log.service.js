import chalk from "chalk";
import dedent from "dedent";

const successLog = (message) => {
    console.log(dedent`${chalk.bgGreen(' SUCCESS ')}: ${message}`)
}

const errorLog = (error) => {
    console.log(dedent`${chalk.bgRed(' ERROR ')}: ${error}`)
}

const helperLog = () => {
    console.log(dedent`${chalk.bgBlue(' HELP ')}
    ${chalk.blue(`Вас приветствует сервисный помошник`)}
    -s [CITY] Установить город для определения погоды
    -h Получить справку
    -t Установить токен сервиса
    `)
};


const resultLog = (data) => {
    console.log(dedent`${chalk.bgGreen(' RESULT ')}: 
    ГОРОД: ${data.name};
    ОПИСАНИЕ: ${data.weather[0].description}
    ТЕМПЕРАТУРА: ${data.main.temp}*C ощущается как ${data.main.feels_like}*C
    СКОРОСТЬ ВЕТРА: ${data.wind.speed} м/с
    `)
};

export { helperLog , errorLog, successLog, resultLog };