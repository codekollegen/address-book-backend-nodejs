import { BaseEntity, Column, Entity, PrimaryColumn } from "typeorm";

@Entity("contacts")
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
  phones?: string;

  @Column()
  emails?: string;

  @Column()
  addresses?: string;

  @Column()
  favorite!: boolean;
}
