<h1 align="center">
  <a href="https://www.hapvida.com.br">
    tl;dv Full-Stack Developer Test 
  </a>
</h1>


Probably if you is seeing this is because you are evaluting my code (and I really hope not dissapoint you 😅). In this repository you will going to check the whole proccess attached to my [tl;dv test](t)

[t]: https://www.notion.so/tldv/tl-dv-Full-Stack-Developer-Test-a705f7bb6f6b4e19a7dc346f7fa667f3
[s]: https://strapi.io
[m]: https://mongodb.com
[rjs]: https://reactjs.com

## Index

- [Index](#index)
- [Project structure](#project-structure)
- [Requirements](#requirements)
  - [Dependencies](#dependencies)
  - [First time running](#first-time-running)
    - [API:](#api)
    - [WebApp:](#webapp)
  - [.env files](#env-files)
    - [API](#api-1)
    - [WebApp](#webapp-1)


## Project structure

- `api`: API structure using [Strapi](s) and [MongoDB](m);
- `webapp`: WebApp to consume Strapi API using [React.js](rjs)

## Requirements

If u want to run this repository in your local machine you need to setup first some dependencies.

### Dependencies
- Node.js
- PM2 to maintain the app runnig as a service (production only)

### First time running
#### API:
 - `yarn strapi`: run in CI mode;
 - `yarn develop`: run in development mode;
 - `yarn production`: run PM2 process;

#### WebApp:
 - `yarn start`: debug using development mode;
 - `yarn start:staging`: debug using staging mode;
 - `yarn start:production`: debug using production mode; 
 - `yarn build`: build using development mode;
 - `yarn build:staging`: build using staging mode;
 - `yarn build:production`: build using production mode; 
 - `yarn test`: run unit tests (Jest);

### .env files
Both `webapp` and `api` projects need .env files to run differents modes in your local machine or in production servers. You can check below what you need to set in each one of this .env files.

#### API
`.env.development` or `.env.production`

    HOST=0.0.0.0 # Your database host IP
    PORT=1337 # Default application port
    DATABASE_NAME=tldv-database # MongoDB Database name

#### WebApp
`.env.development.local`, `.env.staging.local` or `.env.production.local`

    REACT_APP_API_URL=https://api.thisismytldvtest.com # The env mode API URL