import { Knex } from 'knex'

const usertable = 'users'

export async function up(knex: Knex): Promise<void> {
  // needed to call 'uuid_generate_v4()'
  // await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

  const exists = await knex.schema.hasTable(usertable)
  if(!exists) {
    await knex.schema.createTable(usertable, tableDef => {
      tableDef.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
      tableDef.string('email')
      tableDef.string('name')
      tableDef.string('surname')
      tableDef.timestamps(true, true)
    })
  }
}

  



export const down = async (knex: Knex): Promise<void> =>
  knex.schema.dropTableIfExists(usertable)

