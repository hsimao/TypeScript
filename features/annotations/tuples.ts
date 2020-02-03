const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

// 定義陣列內容的類型順序
type Drink = [string, boolean, number]
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]

pepsi[0] = 'blue'
pepsi[2] = 0
