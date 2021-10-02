import { database } from './../../database/database';
export const userResolver = {
  Query: {
    allUsers: async () => {
      const res = await database.userService.getAll()
      console.log(res)
      return res
    }
  }
}
