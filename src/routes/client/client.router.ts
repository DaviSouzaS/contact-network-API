import { createClientController } from "../../controllers/client/createClient.controller"
import { Router } from "express"

export const clientRouter: Router = Router()

clientRouter.post('', createClientController)