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

- Criação de Seeds:
- [x] `npx knex seed:make 001_users`

- Importar Seeds:
- [x] `npx knex seed:run`

- Organização de responsabilidades para rotas e controllers.