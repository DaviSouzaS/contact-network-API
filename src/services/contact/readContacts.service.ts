import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Client, Contact } from "../../entities"

export const readContactsService = async (clientId: number): Promise<Contact[]> => {
    
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: any = await clientRepo.findOneBy({
        id: clientId
    })
    
    const contact: Contact[] | null = await contactRepo.find({
        where: {
            client: client
        }
    })

    return contact!
}