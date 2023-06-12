import { iCreateClient } from "../../interfaces/client/createClient.interface"
import AppDataSource from "../../data-source"
import { Repository } from "typeorm"
import { Client } from "../../entities"

export const createClientService = async (payload: iCreateClient): Promise<Client> => {
    
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)
    const client: Client = clientRepo.create(payload)

    await clientRepo.save(client)
    
    return client
}