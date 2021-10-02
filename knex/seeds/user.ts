import { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
    const usertable = "users"
    const users = [
        {
            email: 'user@domain.com',
            name: 'John',
            surname: 'Doe'
        }
    ]
    // Deletes ALL existing entries
    await knex(usertable).del();

    // Inserts seed entries
    await knex(usertable).insert(users);
};
