## LMAA - Look My Awesome Address Book

This project contains a nodeJS backend for the address book containing the necessary api endpoints and postgres database.

The backend is written with:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io/#/)

The project is still under development, so there might still be things that won't work properly. Also keep in mind that as of now no cors policy, authentication handling or other security mechanisms are in place.

### Before you start

In the project root folder create a .env file and configure it to your needs. An .env.sample file is in the project, you can use this as a template.

### Scripts

From the project root folder run:

`docker-compose up`

to start the postgres database and adminer. Adminer runs at `localhost:8080`.

For development you may use:

`npm run watch`

for the ongoing typescript compilation, and:

`npm run dev`

for the nodemon environment.
