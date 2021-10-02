import knex from 'knex';
import { UserService } from './services/user.service';
import { Config, loadConfiguration } from '../config/config.model'


export function provideKnex({ database }: Config) {
  const db = database
  return knex({
    client: 'postgres',
    connection: {
      database: db.name,
      port: db.port,
      user: db.user,
      password: db.pass
    }
  })
}

export const knexInstance = provideKnex(
    loadConfiguration()
)

export const database = {
  userService: new UserService(knexInstance)
}
