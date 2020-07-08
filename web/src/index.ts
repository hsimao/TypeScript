// import { UserEdit } from './views/UserEdit'
// import { User } from './models/User'

// const user = User.buildUser({ name: 'Mars', age: 30 })

// const root = document.getElementById('root')

// if (root) {
//   const userEdit = new UserEdit(root, user)
//   userEdit.render()
//   console.log(userEdit)
// } else {
//   throw new Error('')
// }

// render 用戶列表
import { UserList } from './views/UserList'
import { Collection } from './models/Collection'
import { User, UserProps } from './models/User'

const users = new Collection('http://localhost:3000/users', (json: UserProps) => {
  return User.buildUser(json)
})

users.on('change', () => {
  const root = document.getElementById('root')

  if (root) {
    new UserList(root, users).render()
  }
})

users.fetch()
