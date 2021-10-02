import { Knex } from "knex";
import { UserDB } from "../models/user.model";

export class UserService {

  readonly userTable = 'users'
  constructor(private knex: Knex) {}

  async getAll(): Promise<Array<UserDB>> {
    return this.knex(this.userTable).select<Array<UserDB>>()
  }
}