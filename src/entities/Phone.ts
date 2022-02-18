import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_phone")
export class Phone extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.phones, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contact!: Contact;
}
