import 'reflect-metadata'
import { Methods } from './Methods'

function routeBider(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = routeBider(Methods.get)
export const put = routeBider(Methods.put)
export const post = routeBider(Methods.post)
export const del = routeBider(Methods.del)
export const patch = routeBider(Methods.patch)
