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

export { helperLog , errorLog, successLog };