import { iLoginClient } from "../../interfaces/client/loginClient.interface"
import AppDataSource from "../../data-source"
import { Repository } from "typeorm"
import { AppError } from "../../error"
import { Client } from "../../entities"
import { compare } from "bcryptjs"
import jwt from "jsonwebtoken"
import "dotenv/config" 

export const loginClientService = async (payload: iLoginClient): Promise<string> => {
    
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepo.findOneBy({
        email: payload.email
    })

    if (!client) {
        throw new AppError('Invalid credentials', 401)
    }

    const checkPassword: boolean = await compare(payload.password, client.password)

    if (!checkPassword) {
        throw new AppError('Invalid credentials', 401)
    }

    const token = jwt.sign(
        { id: client.id },
        process.env.SECRET_KEY!,
        { expiresIn: '24h', subject: String(client.id) }
    )

    return token
}