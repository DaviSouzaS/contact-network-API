import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Client, Contact } from "../../entities"

export const createContactService = async (clientId: number, payload: Contact): Promise<Contact> => {
    
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const clientRepo: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client[] | null = await clientRepo.find({
        select: ["id", "name", "email", "phone", "created_at"],
        where: {
            id: clientId
        }
    })

    payload.client = client[0]

    const contact: Contact = contactRepo.create(payload)

    await contactRepo.save({clientId, ...contact})
    
    return contact
}