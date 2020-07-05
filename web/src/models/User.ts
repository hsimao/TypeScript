import axios, { AxiosResponse } from 'axios'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

interface EventProps {
  [key: string]: Callback[]
}

type Callback = () => void

export class User {
  events: EventProps = {}
  constructor(private data: UserProps) {}

  get(propName: string): number | string | undefined {
    return this.data[propName as keyof UserProps]
  }

  set(update: UserProps): void {
    Object.assign(this.data, update)
  }

  on(eventName: string, callback: Callback): void {
    // 先判斷當 events 內是否已經有相同事件, 若無需給空陣列
    const handlers = this.events[eventName] || []
    handlers.push(callback)

    this.events[eventName] = handlers
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName]

    if (!handlers || handlers.length === 0) {
      return
    }

    handlers.forEach((callback) => callback())
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`).then((response: AxiosResponse): void => {
      this.set(response.data)
    })
  }

  save(): void {
    const id = this.get('id')

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data)
    } else {
      axios.post('http://localhost:/3000/users', this.data)
    }
  }
}
