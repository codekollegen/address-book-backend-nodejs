import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_phone")
export class Phone extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.phones)
  contact!: Contact;
}
