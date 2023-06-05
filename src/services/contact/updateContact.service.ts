import { AppDataSource } from "../../data-source"
import { Repository } from "typeorm"
import { Contact } from "../../entities"
import { iUpdateContact } from "../../interfaces/contact/updateContact.interface"

export const updateContactService = async (id: number, payload: iUpdateContact): Promise<Contact> => {
    
    const ContactRepo: Repository<Contact> = AppDataSource.getRepository(Contact)

    const ContactUpdated: Contact = await ContactRepo.save({id, ...payload})

    const ContactId: number = ContactUpdated.id

    const updatedContact: Contact[] | null = await ContactRepo.find({
        where: {
            id: ContactId
        }
    })

    return updatedContact[0]
}