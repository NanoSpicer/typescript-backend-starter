import { database } from '../../database/database';
import { UserDB } from '../../database/models/user.model';
import { wrapAsync } from '../../test-utils';
import { userResolver } from './user.resolver';

// use describe.only and fdescribe to just run that set of tests
// you can do the same thign with it -> fit or it.only
describe('User resolver', () => {
  it('Query.allUsers always returns an empty array', () => {
    jest.spyOn(database.userService, 'getAll').mockReturnValue(wrapAsync([]))
    userResolver.Query.allUsers()
  })

  it('Query.allUsers always returns an empty array', async () => {
    const fakeData: UserDB = {
      id: 'fake-id',
      name: 'fake',
      surname: 'fake',
      email: 'fake@email.com',
      created_at: new Date(),
      updated_at: new Date()
    }
    const testData = Array.from({ length: 10 }).map(() => fakeData)
    jest.spyOn(database.userService, 'getAll').mockReturnValue(wrapAsync(testData))

    const result = await userResolver.Query.allUsers()
    const first = result[0]
    expect(first).toBe(fakeData)
  })
})