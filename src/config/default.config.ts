import { Config } from './config.model'

export const configuration: Config = {
  app: {
    name: 'Your app name',
    port: 4000,
    playground: true
  },
  database: {
    host: 'localhost',
    port: 5432,
    name: 'db_app',
    user: 'app',
    pass: 'app-pass'
  }
}

