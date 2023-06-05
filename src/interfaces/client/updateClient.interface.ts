import { DeepPartial } from "typeorm"
import { Client } from "../../entities"

type iUpdateClient = DeepPartial<Client>

export {
    iUpdateClient
}