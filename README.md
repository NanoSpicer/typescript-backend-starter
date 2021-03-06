# ๐๐ typescript-backend-starter ๐๐

## Prerequisites:
 * nodejs
 * postgres

## Make yourself home โ

### Initialize your workspace
```
$ npm run setup
```

### _optionally ๐_

```
$ npm run seed
```

### And finally  โจ

```
$ npm start
```

## Libraries
  * ๐ธ Interfacing โ GraphQL
  * ๐ฅ Server โ Fastify
  * ๐พ DatabaseAccess โ Knex
  * ๐งช Testing โ Jest
  * ๐ป Language โ TypeScript
## Environments (NODE_ENV)
  * Use 'development' or leave blank to use the dev environment
  * Use 'prod' to use the production environment

## [Knex ๐พ](https://knexjs.org/), your everyday cookbook ๐งโ๐ณ 

### Pass an env 
```bash
$ npx knex migrate:latest --env envname
```
### Seeding

* Creating 
```bash
$ npx knex seed:make name
```
* Running
```bash
$ # by default runs all of em, you may specify
$ # a seed to run
$ npx knex seed:run [options]
```
### Create a migration 
* Creating
```bash
$ npx knex migrate:make name
```
* Running
```bash
# Run a single migration up
$ npx knex migrate:up 

# Run a single migration down
$ npx knex migrate:down

# Run all pending migrations
$ npx knex migrate:latest 

# Run back all the latest migrations
$ npx knex migrate:rollback
```


## Know more by just running:

```bash
# All knex options
$ npx knex
# Docs about a command
$ npx knex help command
```
