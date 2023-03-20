# Coffee and Tee List - MVST challenge Backend

## Installation

```bash
$ npm install
```

## Running the database with docker

First you need to have docker installed in your machine and then run the following command:

```bash
# development
$ npm run start:dev:db
```

Once the database is running in docker, you have to run migrations

```bash
# development
$ npx prisma migrate deploy

$ npx prisma generate

$ npx prisma db seed
```

The first command will create the tables in the database and the second one will generate the prisma client.

```bash
# development
$ npm run start:dev
```

## Running the database configuring it by yourself.

If you don't want to use docker, you can configure this by yourself.
You need to have postgres installed and create a database with the following configuration:

```
host: 'localhost'
port: 5432
username: 'postgres'
password: '1234'
database: 'mvst-coffee-tea-challenge-db'
```

## Running the project

npm run start

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
