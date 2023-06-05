import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { Client } from "../entities"

export const ensureUniqueEmail = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const email: string = request.body.email

    if (!email) {
        return next()
    }

    const clientsRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepo.findOneBy({
        email: email
    })

    if (client !== null) {
        throw new AppError('Email is already being used', 409)
    }

    return next()
}