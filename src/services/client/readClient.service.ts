import { iCreateClient } from "../../interfaces/client/createClient.interface"
import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Client } from "../../entities"
import { AppError } from "../../error"

export const readClientService = async (payload: any): Promise<Client> => {
    
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepo.findOneBy({
        id: payload
    })

    // if (!client) {
    //     throw new AppError('Client not found', 404)
    // }

    return client!
}