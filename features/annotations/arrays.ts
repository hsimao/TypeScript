const carMakers: string[] = ['ford', 'toyota', 'chevy']

const dates: Date[] = [new Date(), new Date()]

const carsByMake: string[][] = [['f150'], ['corlla'], ['camaro']]

const car = carMakers[0]

const myCar = carMakers.pop()

carMakers.push(0)

carMakers.map((car: string): string => {
  return car.toUpperCase()
})

const importantDates: (Date | string)[] = [new Date(), '2020-02-30']
importantDates.push(new Date())
importantDates.push('2020-03-30')
importantDates.push(0)
