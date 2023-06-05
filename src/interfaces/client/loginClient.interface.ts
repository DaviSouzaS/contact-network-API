import { loginClientSchema } from "../../schemas/client/loginClient.schema"
import { z } from "zod"

type iLoginClient = z.infer<typeof loginClientSchema>

export {
    iLoginClient
}