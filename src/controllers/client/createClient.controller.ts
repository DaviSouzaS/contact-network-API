import { iReturnClient } from "../../interfaces/client/createClient.interface"
import { createClientService } from "../../services/client/createClient.service"
import { Request, Response } from "express"

export const createClientController = async (request: Request, response: Response): Promise<Response> => {

    const client: iReturnClient = await createClientService(request.body)

    delete client.password

    return response.status(201).json(client)
}