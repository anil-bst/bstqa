## Description

A Serverside Rendered Web App, made using `nestjs`


## Directory Structure 
- `migrations`
- contains all auto-generated, and manually written migration files for typeorm. 
`src`
 - `abstractions` ( Contains abstract classes and interfaces to define public contracts for concrete classes)
 - `config` ( contains all configuration files )
 - `constants` ( contains all constant definitions for usage across the applications)
 - `enums` ( contains all enums for usage across the applications)
 - `orm` (All typeorm related things like entities are defined here)
 - `modules` ( All Modules are defined here)
 - `types` (All custom types are defined here)
 - `utils` ( any custom utiltiy you may need for example validations are defined here)
 `frontend`:
   - `scripts`
   - `assets`
   - `scss` ( contails all sass stylesheets )
   - `templates` ( any api that renders an html response will have the html-template defined here, read more on using templates in MVC section of `nestjs` docs)
      - `layouts` ( Contains all layouts for templating)
      - `partials` ( Contains all partials )
      - `views` ( Contails all pages)
- `workers` ( any thing that needs to be done in the background (for example running a cron to generate sitemap.xml ) can be defined here in a worker, the worked can be executed on a different thread)
 - `main.ts` ( contains the bootstrapping code for the application, example creating dbconnections, starting express server etc)
 - `.env` ( not committed, all environment variables will be defined here)
 - `.env.sample` ( you example of environment variables will have to be defined here)
 - `docker-compose.local.yml` ( Contains your docker-compose configuration for local, contains images for mysql, server, and adminer )
 - `docker-compose.yml` ( Contains your docker-compose configuration for an environment where only server needs to be started)
 - `Dockerfile` ( Your dockerfile )
 - `nodemon-debug.json` ( nodemon config for starting in debug mode)
 - `nodemon-dev.json` ( nodemon config for starting in development mode)
 - `nodemon.json` ( nodemon config for starting in production mode)
 - `nest-cli.json` ( configuration for nest-cli)
 - `ormconfig.js`( Configuration to work with your orm from terminal and from the application)
 - `tsconfig.json` ( Your typescript build configuration file to include and exclude folders for build)
 - `tsconfig.json` ( Your typescript configuration)
 - `tslint.json` ( Your linter configurations)

## Installation

```bash
git clone https://github.com/bluestacks/bst-web-boilerplate.git
```
```bash
cd bst-web-boilerplate
```

```
cp .env.sample .env
```

```bash
$ npm install
```

Set all the environment variables. 
You should have mysql installed. 
and should have the user, database, and password setup as per the values provided in .env

This will autoupdate your database as per the schema defined in the project
```bash
npm run migration:up
```


## Running the app

```bash

# watch mode
$ npm run start:development

# production mode
$ npm run start:production
```


# Using Docker

## Using `docker-compose` in development mode
```bash
docker-compose -f docker-compose.local.yml up
```

## First time dev setup

- Start All Services 

```bash
docker-compose -f docker-compose.local.yml up
```
- Run migrations

```bash
# run this in another terminal
docker exec -it `docker ps -f name=server | tail -1 | awk '{ print $1 }'` bash
npm run migration:up
```

## Reset database
- Close all services 
```bash 
 docker-compose -f docker-compose.dev.yml down
```
- Delete `mysql` folder 

```bash
rm -rf mysql
```

## Generate migration
 - Start all services and Optionally remove the files from `migrations/` folder which are not already pushed to production

```bash
docker-compose -f docker-compose.dev.yml up
```

 - Generate the migration

```bash
# run this in another terminal
docker exec -it `docker ps -f name=server | tail -1 | awk '{ print $1 }'` bash
npm run migration:generate
```

## Run `mysql` CLI
```bash
docker exec -it `docker ps -f name=mysql | tail -1 | awk '{ print $1 }'` bash
mysql -U db_username db_name
```



## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).
