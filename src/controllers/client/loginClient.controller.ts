import { Request, Response } from "express"
import { iLoginClient } from "../../interfaces/client/loginClient.interface"
import { loginClientService } from "../../services/client/loginClient.service"

export const loginClientController = async (request: Request, response: Response): Promise<Response> => {

    const loginData: iLoginClient = request.body

    const token: string = await loginClientService(loginData)

    return response.status(200).json({
        token: token
    })
}