import { Router } from "express"
import { createContactController } from "../../controllers/contact/createContact.controller"
import { ensureClientExist } from "../../middlewares/ensureClientExist.middlewares"
import { validateToken } from "../../middlewares/validateToken.middleware"
import { ensureClientIsOwner } from "../../middlewares/ensureClientIsOwner.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createContactSchema } from "../../schemas/contact/createContact.schema"

export const contactRouter: Router = Router()

contactRouter.post('/:id', validateToken, ensureClientExist, ensureClientIsOwner, validateData(createContactSchema),createContactController)