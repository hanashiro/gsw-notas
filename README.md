# GSW

## Summary

- [GSW](#gsw)
  - [Summary](#summary)
  - [Getting Started](#getting-started)
  - [Development](#development)
    - [Docker](#docker)
  - [DataBase](#database)
  - [FRONT](#front)
    - [Files Creation](#files-creation)
    - [Components Development](#components-development)
  - [Tests](#tests)
  - [Build](#build)
  - [Development Tools](#development-tools)

## Getting Started

First, install the dependencies with `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

### Docker

You can use Docker if you want.

First, build the image:

```bash
    docker-compose build
```

Install the dependencies:

```bash
    docker-compose run --rm front yarn install
```

Then, start the development server:

```bash
    docker-compose up front
```

If you want to execute other NPM scripts, you can use this:

```bash
    docker-compose run --rm front [script name]
```

Ex for database access:

```bash
    docker exec -it mongodb-notas mongosh -u "admin" -p "123456"
```

## DataBase

To seed the database, run the following command:

```bash
npm run seed
# or
yarn run seed
```

Make sure you have the database running.

## FRONT

### Files Creation

To create new files, run the following command:

```bash
npm run plop
# or
yarn run plop
```

`Plop.js` will create the necessary files with the ready and standardized structures for you to start coding. DON'T create files manually!

### Components Development

`Storybook` is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.

Start Storybook with the following command:

```bash
npm run storybook
# or
yarn run storybook
```

Open [http://localhost:6006](http://localhost:6006) with your browser to see the result.

## Tests

Start tests with `Jest` with the following command:

```bash
npm test
# or
yarn test
```

To see the Test Coverage, run the following command:

```bash
npm run test:coverage
# or
yarn run test:coverage
```

## Build

Run the following command to build your application.

```bash
npm build
# or
yarn build
```

(Optional) If you want to export a static version of the application, run the following command after the build command:

```bash
npm run export
# or
yarn run export
```

The code will be on the `out` folder.
Finally, run the following command to start the Node.js server.
This server will have the code used in production, different from the development server

```bash
npm start
# or
yarn start
```

## Development Tools

To maintain good code structure and standardization, it is recommended to have the following plugins in your code editor or IDE:

-   Prettier
-   ESLint
-   EditorConfig
