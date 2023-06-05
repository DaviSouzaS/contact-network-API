import { z } from "zod"

const updateContactSchema = z.object({
    name: z.string().max(50).optional(),
    email: z.string().email().max(127).optional(),
    phone: z.string().min(11).max(11).optional(),
    location: z.string().max(127).optional()
})

export {
    updateContactSchema
}