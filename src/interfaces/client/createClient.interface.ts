import { createClientSchema, returnClientSchema } from "../../schemas/client/createClient.schema"
import { z } from "zod"

export type iCreateClient = z.infer<typeof createClientSchema>

export type iReturnClient = z.infer<typeof returnClientSchema>