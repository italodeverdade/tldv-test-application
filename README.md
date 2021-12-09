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
 - `yarn production`: run PM2 process

#### WebApp: