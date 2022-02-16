import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_email")
export class Email extends BaseEntity {
  @PrimaryColumn()
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.emails)
  contact!: Contact;
}
