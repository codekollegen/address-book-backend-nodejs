import { Request, Response, Router } from "express";
import { Contact } from "../entities/Contact";
import { ContactService } from "../services/ContactService";
// import { v4 as uuidv4 } from "uuid";
import bodyParser from "body-parser";

export class ContactController {
  public router!: Router;
  private contactService!: ContactService;

  constructor() {
    this.contactService = new ContactService();
    this.router = Router();
    this.initRoutes();
  }

  public getAll = async (req: Request, res: Response) => {
    const contacts = await this.contactService.getAll();
    res.send(contacts).json();
  };

  public get = async (req: Request, res: Response) => {
    const id = req.params.id;
    const contact = await this.contactService.get(id);
    res.send(contact).json();
  };

  public create = async (req: Request, res: Response) => {
    let contact = req.body as Contact;
    contact.id = this.generateId();
    const newContact = await this.contactService.create(contact);
    res.send(newContact).json();
  };

  public update = async (req: Request, res: Response) => {
    const contact = req.body as Contact;
    const id = req.params.id;
    const updatedContact = await this.contactService.update(contact, id);
    res.send(updatedContact).json();
  };

  public delete = async (req: Request, res: Response) => {
    const id = req.params.id;
    res.send(this.contactService.delete(id)).json();
  };

  private initRoutes = () => {
    this.router.get("/", this.getAll);
    this.router.post("/", bodyParser.json(), this.create);
    this.router.get("/:id", this.get);
    this.router.put("/:id", bodyParser.json(), this.update);
    this.router.delete("/:id", bodyParser.json(), this.delete);
  };

  private generateId = () => {
    return Math.random().toString(36).substring(2, 9);
  };
}
