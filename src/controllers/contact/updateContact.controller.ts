import { iUpdateContact } from "../../interfaces/contact/updateContact.interface"
import { Request, Response } from "express"
import { updateContactService } from "../../services/contact/updateContact.service"

export const updateContactController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const updateData: iUpdateContact = request.body

    const updateContact: iUpdateContact | null = await updateContactService(id, updateData)

    return response.status(200).json(updateContact)
}