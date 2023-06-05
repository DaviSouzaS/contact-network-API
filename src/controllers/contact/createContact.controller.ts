import { Contact } from "../../entities"
import { createContactService } from "../../services/contact/createContact.service"
import { Request, Response } from "express"

export const createContactController = async (request: Request, response: Response): Promise<Response> => {

    const clientId: number = parseInt(request.client.id) 

    const contactData: Contact = request.body

    const contact: Contact = await createContactService(clientId, contactData)

    return response.status(201).json(contact)
}