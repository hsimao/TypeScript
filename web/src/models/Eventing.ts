interface EventProps {
  [key: string]: Callback[]
}

type Callback = () => void

export class Eventing {
  events: EventProps = {}

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
}
