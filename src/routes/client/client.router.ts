import { createClientController } from "../../controllers/client/createClient.controller"
import { ensureUniqueEmail } from "../../middlewares/ensureUniqueEmail.middleware"
import { ensureUniquePhone } from "../../middlewares/ensureUniquePhone.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createClientSchema } from "../../schemas/client/createClient.schema"
import { Router } from "express"
import { loginClientSchema } from "../../schemas/client/loginClient.schema"
import { loginClientController } from "../../controllers/client/loginClient.controller"
import { readClientController } from "../../controllers/client/readClient.controller"
import { validateToken } from "../../middlewares/validateToken.middleware"
import { ensureClientIsOwner } from "../../middlewares/ensureClientIsOwner.middleware"
import { ensureClientExist } from "../../middlewares/ensureClientExist.middlewares"
import { updateClientSchema } from "../../schemas/client/updateClient.schema"
import { updateClientController } from "../../controllers/client/updateClient.controller"
import { deleteClientController } from "../../controllers/client/deleteCreate.controller"

export const clientRouter: Router = Router()

clientRouter.post('', validateData(createClientSchema), ensureUniqueEmail, ensureUniquePhone, createClientController)
clientRouter.post('/login', validateData(loginClientSchema), loginClientController)
clientRouter.get('/:id', validateToken, ensureClientExist, ensureClientIsOwner, readClientController)
clientRouter.patch('/:id', validateToken, ensureClientExist, ensureClientIsOwner, validateData(updateClientSchema), ensureUniqueEmail, ensureUniquePhone, updateClientController)
clientRouter.delete('/:id', validateToken, ensureClientExist, ensureClientIsOwner, deleteClientController)