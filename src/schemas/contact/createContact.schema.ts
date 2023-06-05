import { z } from "zod"

const createContactSchema = z.object({
    name: z.string().max(50),
    email: z.string().email().max(127),
    phone: z.string().min(11).max(11),
    location: z.string().max(127)
})

export {
    createContactSchema
}