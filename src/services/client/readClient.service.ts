import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Client } from "../../entities"

export const readClientService = async (payload: number): Promise<Client> => {
    
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientRepo.findOneBy({
        id: payload
    })

    return client!
}