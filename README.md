# GraphQL API

## Description

This is a GraphQL API that uses TypeORM to connect to a SQLite database. It is a simple API that allows you to import and read data (Competitions, Teams and Players) from [Football API](https://football-data.org/).

## Installation

You just need to run `yarn` or `npm install`

## Usage

You need to create a `.env` file with the following variables:

```
PORT=3000
FOOTBALL_API_KEY=YOUR_API_KEY
```

Then you can run `yarn start` or `npm start`

## Dependencies

The project uses the following dependencies:

- To support GraphQL:

  - **[apollo-server](https://www.npmjs.com/package/apollo-server)**

- To support TypeScript Decorators:

  - **[reflect-metadata](https://www.npmjs.com/package/reflect-metadata)**
  - **[type-graphql](https://www.npmjs.com/package/type-graphql)**

- To support Database integration:

  - **[typeorm](https://www.npmjs.com/package/typeorm)**
  - **[sqlite3](https://www.npmjs.com/package/sqlite3)**

- To support environment variables:

  - **[dotenv](https://www.npmjs.com/package/dotenv)**

- To support HTTP requests:
  - **[axios](https://www.npmjs.com/package/axios)**
