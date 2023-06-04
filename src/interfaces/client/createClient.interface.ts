import { createClientSchema } from "../../schemas/client/createClient.schema"
import { z } from "zod"

export type iCreateClient = z.infer<typeof createClientSchema>