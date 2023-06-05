import { Request, Response } from "express"
import { readClientService } from "../../services/client/readClient.service"
import { Client } from "../../entities"
import { iReturnClient } from "../../interfaces/client/createClient.interface"

export const readClientController = async (request: Request, response: Response): Promise<Response> => {

    const id: number = parseInt(request.params.id)
    
    const client: iReturnClient | null = await readClientService(id)

    delete client.password

    return response.status(200).json(client)
}