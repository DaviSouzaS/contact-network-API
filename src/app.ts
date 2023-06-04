import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import { clientRouter } from "./routes/client/client.router"

const app: Application = express()
app.use(express.json())

app.use('/client', clientRouter)

app.use(handleErrors)

export default app