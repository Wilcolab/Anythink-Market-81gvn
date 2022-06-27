# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

* First, [install Docker](https://docs.docker.com/get-docker/).
* Now verify that you have the latest version of Docker by running `docker --version`, and that you have the latest version of Docker-Compose by running `docker-compose --version`.
* Then run `docker-compose up -d` from the project root directory to load Anythink's backend and frontend
* If docker is working correctly, the backend should be running and able to connect to your local database, let's test this by pointing your browser to http://localhost:3000/api/ping to make sure the backend is up and running.

* Now we can check the frontend and make sure it’s connected to the backend - if everything is working properly, you’ll be able to create a new user on http://localhost:3001/register

* It looks like your environment is ready! 😀


