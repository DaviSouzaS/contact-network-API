import "express-async-errors"
import express, { Application } from "express"
import { handleErrors } from "./error"

const app: Application = express()
app.use(express.json())

// ROTAS AQUI

app.use(handleErrors)

export default app