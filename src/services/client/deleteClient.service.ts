import { AppDataSource } from "../../data-source"
import { Client } from "../../entities"

export const deleteClientService = async (id: number): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client)

  const deleteClient = await clientRepo.findOneBy({id: id})

   await clientRepo.remove(deleteClient!)
}

