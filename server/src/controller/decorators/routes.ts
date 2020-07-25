import 'reflect-metadata'

function routeBider(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key)
      Reflect.defineMetadata('method', method, target, key)
    }
  }
}

export const get = routeBider('get')
export const put = routeBider('put')
export const post = routeBider('post')
export const del = routeBider('delete')
export const patch = routeBider('patch')
