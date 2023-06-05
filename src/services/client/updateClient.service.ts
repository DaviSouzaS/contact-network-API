import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Client } from "../../entities"
import { iUpdateClient } from "../../interfaces/client/updateClient.interface"
import { hash } from "bcryptjs"

export const updateClientService = async (id: number, payload: iUpdateClient): Promise<Client> => {
    
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    if (payload.password) {
        const hashPass = await hash(payload.password, 10)
        payload.password = hashPass
    }

    const clientUpdated: Client = await clientRepo.save({id, ...payload})

    const clientId: number = clientUpdated.id

    const updatedClient: Client[] | null = await clientRepo.find({
        select: ["id", "name", "email", "phone", "created_at"],
        where: {
            id: clientId
        }
    })

    return updatedClient[0]
}