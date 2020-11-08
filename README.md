# Saga-Movies

## Description
_duration: 6-7 hours(base mode)

An app that use React-Saga to make asynchronous request (axios) to the database and using react-redux to hold the data between each page/component.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)

## Installation 

1. Create a database named `saga_movies_weekend`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install` to install all dependencies for the project
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Built with

- React
- Express
- React-Redux
- Axios
- Pool(pg)
- Redux-Saga

## Acknowledgement
- Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.
