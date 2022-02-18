import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./Contact";

@Entity("contact_address")
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column()
  label!: string;

  @Column()
  value!: string;

  @ManyToOne(() => Contact, (contact) => contact.addresses, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contact!: Contact;
}
