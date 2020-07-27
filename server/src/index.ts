import express from 'express'
import { AppRouter } from './AppRouter'
import bodyParser from 'body-parser'
import cookieSession from 'cookie-session'

import './controller/RootController'
import './controller/LoginController'

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieSession({ keys: ['marsyoyo'] }))
app.use(AppRouter.getInstance())

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
