import { Request, Response, NextFunction } from "express"
import { AppError } from "../error"
import { Contact } from "../entities"
import { Repository } from "typeorm"
import AppDataSource from "../data-source"

export const ensureClientIsOwnerOfContact = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const contactId: number = parseInt(request.params.id)
    
    const clientId: number = parseInt(request.client.id)

    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact[] | null = await contactRepo.find({
        where: {
            id: contactId
        },
        relations: ["client"]
    })

    const contactOwnerId = contact[0].client.id

    if (contactOwnerId !== clientId) {
        throw new AppError('Client does not have permission', 401)
    }

    return next()
}