const add = (a: number, b: number) => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
}

// never 表示不會完全執行完 function, 在 throw 時就中斷
const throwError = (message: string): never => {
  throw new Error(message)
}

const throwError2 = (message: string): void => {
  if (!message) {
    throw new Error(message)
  }
}

const throwError3 = (message: string): string => {
  if (!message) {
    throw new Error(message)
  }
  return message
}

const toDayWeather = {
  date: new Date(),
  weather: 'sunny',
}

const logWeather = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}
logWeather(toDayWeather)

// 參數解構
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(date)
  console.log(weather)
}

logWeather2(toDayWeather)
