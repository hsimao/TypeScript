const profile = {
  username: 'Mars',
  age: 30,
  coords: {
    lat: 9,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age
  },
}

// const age: number = profile.age

// 解構
const { age, username }: { age: number; username: string } = profile
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
