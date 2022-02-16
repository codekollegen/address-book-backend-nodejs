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
      relations: ["phones"],
    });
    return contact;
  };

  public create = async (contact: Contact) => {
    const newContact = await this.contactRepository.save(contact);
    return newContact;
  };

  public update = async (contact: Contact, id: string) => {
    const updatedContact = await this.contactRepository.update(id, contact);
    return updatedContact;
  };

  public delete = async (id: string) => {
    const deletedContact = await this.contactRepository.delete(id);
    return deletedContact;
  };
}
