## Welcome to TypeOrm with Express and Redis Project!

This project was done as part of a demonstration regarding NodeJs experience.

## Prerequisity

- Docker
- Node
- Express
- Redis
- Typescript

## Requirement

Inside this package, there is a git project containing a Docker file that will bring up a Postgres database containing 2 tables: `vehicles` and `stateLogs`. These tables are already populated with some sample data.

The `vehicles` table has the data of cars that Motorway has sold in the past, or is in the process of selling. The vehicle's current state is defined in the `state` field. The state defines the lifecycle of a vehicle, from quoted to selling and sold.

The `stateLogs` table has the history of each vehicle's state transitions, from the moment it was created with the quoted state, to the most recent state transition.

The task is to build an API with Node.js that, based on a vehicle id and a timestamp, returns a vehicle's information and the vehicle's state on the given timestamp.

## Running the project

To initialize this project, run `docker compose up` from the root of this project. This will build and seed the database. By default the database runs on port `5432` and is also exposed on `5432`, if you want to change this you can update `docker-compose.yml`.

Beside update the `.env` file with the following values:

    PORT=8080

    REDIS_PASSWORD=  <YOUR  REDIS  PASSWORD>

    HOST=  localhost

    USERNAME=  <YOUR  DB  USERNAME>

    PASSWORD=  <YOUR  DB  PASSWORD>

    DATABASE=  <YOUR  DB  NAME>

Also a `Redis` Service is configured as part of the `docker-compose`

After running the docker, we are ready to spin up the project the only command we need the following commands which will start the dev server.

    yarn dev

## Improvement

1.  Imporve Testing
2.  Add linting
