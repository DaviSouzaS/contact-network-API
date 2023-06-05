import { z } from "zod"

const loginClientSchema = z.object({
    email: z.string().email(),
    password: z.string()
})

export {
    loginClientSchema
}