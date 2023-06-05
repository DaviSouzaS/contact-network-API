import { Request, Response } from "express"
import { Contact } from "../../entities"
import { readContactsService } from "../../services/contact/readContacts.service"

export const readContactsController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id)
    
    const contact: Contact[] | null = await readContactsService(id)

    return response.status(200).json(contact)
}