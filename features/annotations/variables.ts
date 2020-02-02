let apples: number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'blue', 'green']
let myNumbers: number[] = [1, 2, 3]
let truths: boolean[] = [true, true, false]
let array: any[] = [1, 'hello', {}]

// Classes
class Car {}
let car: Car = new Car()

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
}

// Function
// 宣告 input 類型與 output 類型 (i: number) => void
const logNumber: (i: number) => void = i => {
  console.log(i)
}

logNumber(1)

// == 何時該使用類型註解 ==
// 因為 TypeScript 會自動推斷類型, 所以我們不用每個地方都自行添加類型註解，除了以下三個情況，必須要加

// 1.) 當 Function 回傳 any 型別時 return 'any' type
const json = '{"x": 10, "y": 20}'

// 因為 JSON.parse function 回傳 'any' type,所以會讓 TS 無法推斷提示報錯
const coordinates = JSON.parse(json)
console.log(coordinates.sdoifjsd) // 印出沒有的屬性，沒有提示

// 加上類型註解, 即可正常提示報錯
const coordinates2: { x: number; y: number } = JSON.parse(json)
// console.log(coordinates2.hello) // 印出沒有的屬性，TS 會有提示

// 2.) 當我們在一行上宣告一個變量, 並稍後對其進行初始化時
let words = ['red', 'green', 'blue']
// let foundWord => 不好的示範
let foundWord: boolean // 要給預設類型

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3.) 變數無法正確推斷類型時
// 以下例子 numberAboveZero 會有兩個類型, 初始為 boolean, 之後變數字
let numbers = [-10, -1, 12]
// let numberAboveZero = false
let numberAboveZero: boolean | number = false // 兩個類型註解

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}
