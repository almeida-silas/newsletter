<h1 align="center">
<br>
  Backend
</h1>

# Run Server

1. Config your database in `.env` file.
2. Check if there is already a database with the name that is in DB_USER in the `.env` file. otherwise, create...
3. Run `yarn knex migrate:up` to create tables in database.
4. Run `yarn dev` to start server.

# Redis in Docker

1. `docker run --name container-redis -p 6379:6379 -d -t redis:alpine`

# Config Database

1. Create a database and configure in app
2. Configure database in `/knexfile.js`
