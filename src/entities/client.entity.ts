import { getRounds, hashSync } from "bcryptjs"
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm"
import { Contact } from "./contact.entity"

@Entity("client")
export class Client {
    
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 50 })
    name: string

    @Column({ length: 127, unique: true })
    email: string

    @Column({ length: 255 })
    password: string

    @Column({ length: 11, unique: true })
    phone: string

    @CreateDateColumn({ type: "date"})
    created_at: string | Date 

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)

        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }

    @OneToMany(() => Contact, (contact) => contact.client)
    contacts: Contact[]
}