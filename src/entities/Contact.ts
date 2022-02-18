import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Address } from "./Address";
import { Email } from "./Email";
import { Phone } from "./Phone";

@Entity("contact")
export class Contact extends BaseEntity {
  @PrimaryColumn()
  id!: string;

  @Column({ default: "" })
  firstname!: string;

  @Column({ default: "" })
  lastname!: string;

  @Column({ default: "" })
  company?: string;

  @Column({ default: false })
  favorite!: boolean;

  @OneToMany(() => Phone, (phone) => phone.contact, { cascade: true })
  phones?: Phone[];

  @OneToMany(() => Email, (email) => email.contact, { cascade: true })
  emails?: Email[];

  @OneToMany(() => Address, (address) => address.contact, { cascade: true })
  addresses?: Address[];
}
