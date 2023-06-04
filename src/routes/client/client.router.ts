import { createClientController } from "../../controllers/client/createClient.controller"
import { ensureUniqueEmail } from "../../middlewares/ensureUniqueEmail.middleware"
import { ensureUniquePhone } from "../../middlewares/ensureUniquePhone.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createClientSchema } from "../../schemas/client/createClient.schema"
import { Router } from "express"

export const clientRouter: Router = Router()

clientRouter.post('', validateData(createClientSchema), ensureUniqueEmail, ensureUniquePhone, createClientController)
clientRouter.post('/login')