import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createConnection } from "typeorm";
import { Contact } from "./entities/Contact";
import { ContactController } from "./controllers/ContactController";
import { Phone } from "./entities/Phone";
import { Email } from "./entities/Email";
import { Address } from "./entities/Address";

const main = async () => {
  dotenv.config();

  await createConnection({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DB || "",
    entities: [Contact, Phone, Email, Address],
    name: "contacts",
  });

  const app = express();
  const contactController = new ContactController();
  const port = parseInt(process.env.PORT || "4000");

  app.use(cors());
  app.use("/contacts", contactController.router);

  app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
