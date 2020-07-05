export class Attributes<T> {
  constructor(private data: T) {}

  // 針對不同物件索引的 key 來推斷物件 value 型別
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key]
  }

  set(update: T): void {
    Object.assign(this.data, update)
  }
}
