# ReserveMe API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql -U development` command to login to the PostgreSQL server with the username `development` and the password `development`. 

Create a database with the command `CREATE DATABASE reservedb;`.

Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration. The `node-postgres` library uses these environment variables by default.

```
PGHOST=localhost
PGUSER=development
PGDATABASE=reservedb
PGPASSWORD=reservedb
PGPORT=5432
```

## RESET DATABASE

Run 'npm run reset'
## Run The Server

Running the server normally
```sh
npm start
```

Running the server so it returns an error when saving/deleting for testing the client's error handling capabilities
```sh
npm run error
```

## Api

### Users

`GET /api/users`

Response


```

### Reservations

`GET /api/reservations`

Response:

`PUT /api/appointments/:id`

Body:
