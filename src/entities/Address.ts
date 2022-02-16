import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_address")
export class Address extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.addresses)
  contact!: Contact;
}
