import { createClientSchema, returnClientSchema } from "../../schemas/client/createClient.schema"
import { z } from "zod"

type iCreateClient = z.infer<typeof createClientSchema>

type iReturnClient = z.infer<typeof returnClientSchema>

export {
    iCreateClient,
    iReturnClient
}