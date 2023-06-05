import { iUpdateClient } from "../../interfaces/client/updateClient.interface"
import { updateClientService } from "../../services/client/updateClient.service"
import { Request, Response } from "express"

export const updateClientController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id) 

    const updateData: iUpdateClient = request.body

    const updateClient: iUpdateClient | null = await updateClientService(id, updateData)

    return response.status(200).json(updateClient)
}