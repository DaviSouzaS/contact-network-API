import AppDataSource from "../../data-source"
import { Repository } from "typeorm"
import { Contact } from "../../entities"

export const readContactService = async (contactId: number): Promise<Contact> => {
    
    const contactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const contact: Contact | null = await contactRepo.findOneBy({
        id: contactId
    })

    return contact!
}