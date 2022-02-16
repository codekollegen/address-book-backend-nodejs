import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Address } from "./Address";
import { Email } from "./Email";
import { Phone } from "./Phone";

@Entity("contact")
export class Contact extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  firstname!: string;

  @Column()
  lastname!: string;

  @Column()
  company?: string;

  @Column()
  favorite!: boolean;

  @OneToMany(() => Phone, (phone) => phone.contact)
  phones?: Phone[];

  @OneToMany(() => Email, (email) => email.contact)
  emails?: Email[];

  @OneToMany(() => Address, (address) => address.contact)
  addresses?: Address[];
}
