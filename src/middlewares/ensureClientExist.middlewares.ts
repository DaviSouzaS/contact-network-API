import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { Client } from "../entities"

export const ensureClientExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const id: number = parseInt(request.params.id)

    const client: Client | null = await clientRepo.findOneBy({
        id: id
    })

    if (!client) {
        throw new AppError('Client not found', 404)
    }

    return next()
}