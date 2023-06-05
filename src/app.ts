import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"
import { clientRouter } from "./routes/client/client.router"
import { contactRouter } from "./routes/contact/contact.router"

const app: Application = express()
app.use(express.json())

app.use('/client', clientRouter)
app.use('/contact', contactRouter)

app.use(handleErrors)

export default app