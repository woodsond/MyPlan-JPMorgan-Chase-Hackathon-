# My Path

## Setup

1. Create a `.env` file from `.env-template` in the project root.

2. Input the values into your `.env` file for the requested fields.

## Database

1. To bring up the database, make sure that you are in the project root, and run `docker-compose up`.

## API

1. Run `npm i` in your `api` folder.

2. Run `npm start` to bring up the api.

## UI

1. To start up the UI, make sure that you copy your `.env` file from the project root into the `ui` folder.

2. Next, run `npm i` to install your dependencies.

3. Run `npm start` and the application should run.

4. At the login, you can login with `user1`, `user2`, ... `user10` using the password you specified in your `.env` file with `DEFAULT_PASSWORD`.