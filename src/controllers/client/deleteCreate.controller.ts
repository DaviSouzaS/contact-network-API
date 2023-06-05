import { deleteClientService } from "../../services/client/deleteClient.service"
import { Request, Response } from "express"

export const deleteClientController = async (request: Request, response: Response): Promise<Response> => {

    const clientId: number = parseInt(request.params.id)

    await deleteClientService(clientId)

    return response.status(204).send()
  
}