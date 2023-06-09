import { Client } from "../../entities";
import { createContactSchema } from "../../schemas/contact/createContact.schema"
import { z } from "zod"

type iCreateContact = z.infer<typeof createContactSchema>

interface iCreateContactReturn {
    id: number;
    name: string;
    email: string;
    phone: string;
    location: string;
    created_at: string | Date;
    client: Client;
    clientId?: number;
}

export {
    iCreateContact,
    iCreateContactReturn
}