import { z } from "zod"

export const createClientSchema = z.object({
    name: z.string().max(50),
    email: z.string().email().max(127),
    password: z.string().max(255).min(8),
    phone: z.string().min(11).max(11)
})