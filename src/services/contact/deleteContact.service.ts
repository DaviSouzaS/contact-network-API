import { AppDataSource } from "../../data-source"
import { Contact } from "../../entities"

export const deleteContactService = async (id: number): Promise<void> => {
  const contactRepo = AppDataSource.getRepository(Contact)

  const deleteContact = await contactRepo.findOneBy({id: id})

   await contactRepo.remove(deleteContact!)
}