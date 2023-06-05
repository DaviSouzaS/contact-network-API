import { Router } from "express"
import { createContactController } from "../../controllers/contact/createContact.controller"
import { ensureClientExist } from "../../middlewares/ensureClientExist.middlewares"
import { validateToken } from "../../middlewares/validateToken.middleware"
import { ensureClientIsOwner } from "../../middlewares/ensureClientIsOwner.middleware"
import { validateData } from "../../middlewares/validateData.middleware"
import { createContactSchema } from "../../schemas/contact/createContact.schema"
import { ensureContactExist } from "../../middlewares/ensureContactExist.middlewares"
import { readContactController } from "../../controllers/contact/readContact.controller"
import { ensureClientIsOwnerOfContact } from "../../middlewares/ensureClientIsOwnerOfContact.middleware"
import { readContactsController } from "../../controllers/contact/readContacts.controller"

export const contactRouter: Router = Router()

contactRouter.post('/:id', validateToken, ensureClientExist, ensureClientIsOwner, validateData(createContactSchema),createContactController)
contactRouter.get('/:id', validateToken, ensureContactExist, ensureClientIsOwnerOfContact, readContactController),
contactRouter.get('/all/:id', validateToken, ensureClientExist, ensureClientIsOwner, readContactsController)