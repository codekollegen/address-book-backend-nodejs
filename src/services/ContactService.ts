import { Connection, getConnection } from "typeorm";
import { Address } from "../entities/Address";
import { Contact } from "../entities/Contact";
import { Email } from "../entities/Email";
import { Phone } from "../entities/Phone";
import { ContactRepository } from "../repositories/ContactRepository";

export class ContactService {
  private contactRepository!: ContactRepository;
  private connection!: Connection;

  constructor() {
    this.contactRepository =
      getConnection("contacts").getCustomRepository(ContactRepository);

    this.connection = getConnection("contacts");
  }

  public getAll = async () => {
    const contacts = await this.contactRepository.find();
    return contacts;
  };

  public get = async (id: string) => {
    const contact = await this.contactRepository.findOne(id, {
      relations: ["phones", "emails", "addresses"],
    });
    return contact;
  };

  public create = async (contact: Contact) => {
    const newContact = await this.contactRepository.save(contact);
    return newContact;
  };

  public update = async (data: Contact, id: string) => {
    const contact = await this.contactRepository.findOne(id);

    if (contact) {
      Object.assign(contact, data);
      const updatedContact = await this.contactRepository.save(contact);
      return updatedContact;
    }

    return {};
  };

  public delete = async (id: string) => {
    const deletedContact = await this.contactRepository.delete(id);
    return deletedContact;
  };
}
