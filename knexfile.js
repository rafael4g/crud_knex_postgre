// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: "knex_test",
      port: 5433,
      user: "postgres",
      password: "Pab#9090"    
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`
    }
  }
};
