# 🚧 Market Importer CSV (under construction) 🚧

This is a tool for importing product data from a market in CSV format using HTTP. It is written in TypeScript and uses VITest for unit tests, Postgres for the database, and Docker Compose for deployment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have Node.js, NPM, and Docker Compose installed on your machine.

### Installing

Clone the repository to your local machine and install the dependencies:

```
git clone https://github.com/jfirme-sys/market-importer.git
cd market-importer
npm install
```
To run the tests, use the following command:

```
npm test
```

To start the app in development mode, use the following command:

```
npm run dev
```

To start the app using Docker Compose, use the following command:

```
docker-compose up
```

## Usage

To import products from a CSV file, make a POST request to the `/import` endpoint with the CSV file in the request