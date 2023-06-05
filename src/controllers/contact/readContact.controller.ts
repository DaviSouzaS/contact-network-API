import { Request, Response } from "express"
import { readContactService } from "../../services/contact/readContact.service"
import { Contact } from "../../entities"

export const readContactController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id)
    
    const contact: Contact | null = await readContactService(id)

    return response.status(200).json(contact)
}