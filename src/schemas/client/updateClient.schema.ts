import { z } from "zod"

const updateClientSchema = z.object({
    name: z.string().max(50).optional(),
    email: z.string().email().max(127).optional(),
    password: z.string().max(255).min(8).optional(),
    phone: z.string().min(11).max(11).optional()
})

export {
    updateClientSchema
}