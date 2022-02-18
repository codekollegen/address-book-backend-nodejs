import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_email")
export class Email extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.emails, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contact!: Contact;
}
