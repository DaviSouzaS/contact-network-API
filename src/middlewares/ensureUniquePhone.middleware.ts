import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { Client } from "../entities"

export const ensureUniquePhone = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const phone: string = request.body.phone

    if (!phone) {
        return next()
    }

    const clientsRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepo.findOneBy({
        phone: phone
    })

    if (client !== null) {
        throw new AppError('Phone number is already being used', 409)
    }

    return next()
}