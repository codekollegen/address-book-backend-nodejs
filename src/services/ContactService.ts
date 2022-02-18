import { getConnection } from "typeorm";
import { Contact } from "../entities/Contact";
import { ContactRepository } from "../repositories/ContactRepository";

export class ContactService {
  private contactRepository!: ContactRepository;

  constructor() {
    this.contactRepository =
      getConnection("contacts").getCustomRepository(ContactRepository);
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
      /**
       * Important to note:
       * When phone numbers are "removed" via this update call, there foreign key
       * in the database is simply set to NULL, but the entry stays.
       */
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
