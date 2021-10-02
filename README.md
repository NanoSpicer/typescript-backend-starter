# 🎉🎉 typescript-backend-starter 🎉🎉

## Prerequisites:
 * nodejs
 * postgres

## Make yourself home ☕

### Initialize your workspace
```
$ npm run setup
```

### _optionally 🙂_

```
$ npm run seed
```

### And finally  ✨

```
$ npm start
```

## Libraries
  * 🕸 Interfacing – GraphQL
  * 🖥 Server – Express
  * 💾 DatabaseAccess – Knex
  * 🧪 Testing – Jest
  * 💻 Language – TypeScript
## Environments (NODE_ENV)
  * Use 'development' or leave blank to use the dev environment
  * Use 'prod' to use the production environment

## [Knex 💾](https://knexjs.org/), your everyday cookbook 🧑‍🍳 

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