import { Router, Request, Response, NextFunction } from 'express'

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined }
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session?.loggedIn) {
    next()
    return
  }

  res.status(403).send('Not permitted')
}

const router = Router()

router.get('/', (req: Request, res: Response) => {
  if (req.session?.loggedIn) {
    res.send(`
      <div>
        <div>You are logged in</div>
        <a href="/logout">Logout</a>
      </div>
    `)
  } else {
    res.send(`
      <div>
        <div>You are Not logged in</div>
        <a href="/auth/login">Login</a>
      </div>
    `)
  }
})

router.get('/logout', (req: Request, res: Response) => {
  req.session = null
  res.redirect('/')
})

router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user')
})

export { router }

// @controller('/auth')
// class LoginController {
//   @get('/login')
//   getLogin(req: Request, res: Response): void {
//     res.send('form')
//   }

//   @post('/login')
//   @validateBody('email', 'body')
//   @use(requireAuth)
//   postLogin(req: Request, res: Response): void {
//     const { email, password } = req.body

//     if (email && password && email === 'hello@gmail.com' && password === 'hello') {
//       req.session = { loggedIn: true }
//       res.redirect('/')
//     } else {
//       res.send('Invalid email or password')
//     }
//   }
// }

// function post(routeName: string) {
//   return function (target: any, key: string, desc: PropertyDescriptor) {
//     router.post(routeName, target[key])
//   }
// }

// function use(middleware: any) {
//   return function (target: any, key: string, desc: PropertyDescriptor) {
//     router.addMiddlewareToHandlerWeJustRegistered(middleware)
//   }
// }
