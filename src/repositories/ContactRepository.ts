import { EntityRepository, Repository } from "typeorm";
import { Address } from "../entities/Address";
import { Contact } from "../entities/Contact";
import { Email } from "../entities/Email";
import { Phone } from "../entities/Phone";

@EntityRepository(Contact)
export class ContactRepository extends Repository<Contact> {}

@EntityRepository(Phone)
export class PhoneRepository extends Repository<Phone> {}

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {}

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {}
