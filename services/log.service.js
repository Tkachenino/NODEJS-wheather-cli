import chalk from "chalk";
import dedent from "dedent";

const helperLog = () => {
    console.log(dedent`${chalk.bgBlue(' HELP ')}
    ${chalk.blue(`Вас приветствует сервисный помошник`)}
    -s [CITY] Установить город для определения погоды
    -h Получить справку
    -t Установить токен сервиса
    `)
};

export { helperLog };