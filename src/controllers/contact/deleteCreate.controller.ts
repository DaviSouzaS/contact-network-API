import { Request, Response } from "express"
import { deleteContactService } from "../../services/contact/deleteContact.service"

export const deleteContactController = async (request: Request, response: Response): Promise<Response> => {

    const contactId: number = parseInt(request.params.id)

    await deleteContactService(contactId)

    return response.status(204).send()
  
}