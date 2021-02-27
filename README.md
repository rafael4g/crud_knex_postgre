# KNEX POSTGRE

## Instalando dependencias
- [x] `npm init -y`
- [x] `npm i knex pg express nodemon`
- [x] `configurar script em package.json`

## Iniciando o KNEX e suas configurações
- [x] `npx knex init`
- Configurar o arquivo [`knexfile.js`] (Knexfile.js):
-   [x] `tipo de banco + usuario + senha`
-   [x] `pasta para as migrations`

- Importar as migrations:
- [x] `npx knex migrate:latest`

- Criação de Seeds para users:
- [x] `npx knex seed:make 001_users`

- Importar Seeds 001_users.js:
- [x] `npx knex seed:make 001_users.js`

- Criação de Seeds para projects:
- [x] ``

- Importar Seeds projects.js
- [x] `npx knex seed:make 002_projects`

- Organização de responsabilidades para rotas e controllers.