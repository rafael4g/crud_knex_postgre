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
- [x] `npx knex seed:run --specific 001_users.js`

- Criação de Seeds para projects:
- [x] `npx knex seed:make 002_projects`

- Importar Seeds projects.js
- [x] `npx knex seed:run --specific 002_projects.js`

- Realizando peginação dos projetos via rotas

- Criação de nova migration para adicionar coluna
- [x] `npx knex migrate:make add_column_delete_at_to_users`

- Importar as migrations:
- [x] `npx knex migrate:latest`

- Criação de nova migration para procedures:
- [x] `npx knex migrate:make add_custom_functions`

- [x] `npx knex migrate:rollback --all`

- Importar as migrations:
- [x] `npx knex migrate:latest`

--

- Organização de responsabilidades para rotas e controllers.