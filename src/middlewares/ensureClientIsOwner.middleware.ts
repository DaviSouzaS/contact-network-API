import { Request, Response, NextFunction } from "express"
import { AppError } from "../error"

export const ensureClientIsOwner = async (request: Request, response: Response, next: NextFunction): Promise<void> => {

    const paramId: number = parseInt(request.params.id)
    
    const clientId: number = parseInt(request.client.id)

    if (paramId !== clientId) {
        throw new AppError('Client does not have permission', 401)
    }

    return next()
}