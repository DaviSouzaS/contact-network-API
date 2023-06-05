import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import { Client } from "./client.entity"

@Entity("contact")
export class Contact {
    
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({ length: 50 })
    name: string

    @Column({ length: 127 })
    email: string

    @Column({ length: 11 })
    phone: string

    @Column({ length: 127 })
    location: string

    @CreateDateColumn({ type: "date"})
    created_at: string | Date 

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Client
}