const { env } = require('process')
// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'db_app',
      user:     'app',
      password: 'are-coool'
    },
    pool: {
      min: 2,
      max: 10
    }, 
    migrations: {
      tableName: 'knex_migrations',
      directory: 'knex/migrations'
    },
    seeds: {
      directory: 'knex/seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'db_app',
      user:     'app',
      password: 'are-coool'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'knex/migrations'
    },
    seeds: {
      directory: 'knex/seeds'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: env.PROD_DB_NAME,
      user:     env.PROD_DB_USER,
      password: env.PROD_DB_PASS
    },
    pool: {
      min: env.PROD_DB_POOL_MIN ?? 2,
      max: env.PROD_DB_POOL_MIN ?? 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: 'knex/migrations'
    },
    seeds: {
      directory: 'knex/seeds'
    }
  }

};
