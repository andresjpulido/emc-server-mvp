import express from 'express'
import type { Response, Request } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

let port = process.env.PORT
if (port == null) {
  port = '3000'
}

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express ok!')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
