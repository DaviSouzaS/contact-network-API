import AppDataSource from "../../data-source"
import { Repository } from "typeorm"
import { Client, Contact } from "../../entities"
import { iCreateContactReturn } from "../../interfaces/contact/createContact.interface"

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

    const contactReturn: iCreateContactReturn = {clientId, ...contact}

    await contactRepo.save(contactReturn)

    delete contactReturn.clientId

    return contactReturn
}