class Vehicel {
  // color: string
  // constructor(color: string) {
  //   this.color = color
  // }

  // 簡寫
  constructor(public color: string) {}

  protected honk(): void {
    console.log(`${this.color}`)
  }
}

const vehicel = new Vehicel('green')
console.log(vehicel.color)

class Car2 extends Vehicel {
  constructor(color: string, public wheels: number) {
    super(color)
  }
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive()
    this.honk()
  }
}

const car2 = new Car2('yellow', 300)
car2.startDrivingProcess()
console.log(car2.wheels)
