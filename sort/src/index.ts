import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

const numbersCollection = new NumbersCollection([-10, 4, 0, 3, -4])
const charactersCollection = new CharactersCollection('ZZaZhbYC')

const sorter = new Sorter(numbersCollection)
const stringSorter = new Sorter(charactersCollection)

sorter.sort()
stringSorter.sort()

console.log(numbersCollection.data)
console.log(charactersCollection.data)
