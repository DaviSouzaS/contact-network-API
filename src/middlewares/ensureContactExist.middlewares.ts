import { Request, Response, NextFunction } from "express"
import AppDataSource from "../data-source"
import { Repository } from "typeorm"
import { AppError } from "../error"
import { Contact } from "../entities"

export const ensureContactExist = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const id: number = parseInt(request.params.id)

    const contact: Contact | null = await contactRepo.findOneBy({
        id: id
    })

    if (!contact) {
        throw new AppError('Contact not found', 404)
    }

    return next()
}