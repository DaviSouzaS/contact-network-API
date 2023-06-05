import { createContactSchema } from "../../schemas/contact/createContact.schema"
import { z } from "zod"

type iCreateContact = z.infer<typeof createContactSchema>

export {
    iCreateContact
}