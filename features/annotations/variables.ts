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
