interface Vehicel {
  name: string
  year: number
  broken: boolean
  summary(): string // 宣告 function 並會 return string
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  },
}

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is has ${this.sugar} grams os sugar`
  },
}

const printVehicle = (vehicle: Vehicel): void => {
  console.log(`Name: ${vehicle.name}`)
  console.log(`Name: ${vehicle.year}`)
  console.log(`Name: ${vehicle.broken}`)
  console.log(vehicle.summary())
}

printVehicle(oldCivic)

// 定義通用 interface
interface Reportable {
  summary(): string
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary())
}

printSummary(oldCivic)
printSummary(drink2)
