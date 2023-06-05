import { DeepPartial } from "typeorm"
import { Contact } from "../../entities"

type iUpdateContact = DeepPartial<Contact>
export {
    iUpdateContact
}