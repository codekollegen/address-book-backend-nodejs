import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
import { createConnection } from "typeorm";
import { Contact } from "./entities/Contact";
import { ContactController } from "./controllers/ContactController";

const main = async () => {
  dotenv.config();

  await createConnection({
    type: "postgres",
    host: process.env.POSTGRES_HOST || "",
    port: parseInt(process.env.POSTGRES_PORT || "5432"),
    username: process.env.POSTGRES_USER || "",
    password: process.env.POSTGRES_PASSWORD || "",
    database: process.env.POSTGRES_DB || "",
    entities: [Contact],
    name: "contacts",
  });

  const app = express();
  const contactController = new ContactController();
  const port = parseInt(process.env.PORT || "4000");

  app.use("/contacts", contactController.router);

  app.listen(port, () => {
    console.log(`server started on localhost:${port}`);
  });
};

main().catch((err) => {
  console.log(err);
});
