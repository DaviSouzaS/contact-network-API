import { createClientController } from "../../controllers/client/createClient.controller"
import { ensureUniqueEmail } from "../../middlewares/ensureUniqueEmail.middleware"
import { ensureUniquePhone } from "../../middlewares/ensureUniquePhone.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createClientSchema } from "../../schemas/client/createClient.schema"
import { Router } from "express"
import { loginClientSchema } from "../../schemas/client/loginClient.schema"
import { loginClientController } from "../../controllers/client/loginClient.controller"

export const clientRouter: Router = Router()

clientRouter.post('', validateData(createClientSchema), ensureUniqueEmail, ensureUniquePhone, createClientController)
clientRouter.post('/login', validateData(loginClientSchema), loginClientController)