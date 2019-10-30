# Server for Contacts Project

This is a backend server for the TPD app project. This project is part of TPD core projects.

To build the front end of the TPD app, we've built this server and an API to interact with it.

## Getting Set Up

Getting the server running on your local machine takes only a few steps:

1. clone the project - `git clone https://github.com:thepresidents-in/tpd-backend.git`
2. install its dependencies - `npm install`
3. start the server - `node server.js`

## Smaple curl request

      curl -X POST \
      http://localhost:5001/sql \
      -H 'Authorization: \"did\"' \
      -H 'Cache-Control: no-cache' \
      -H 'Content-Type: application/json' \
      -H 'Postman-Token: 32f78bc5-6df7-49eb-ae19-b1637a6f79d0' \
      -d '{
      "fn":"selectAll",
      "params":["village"]
      }'

## Contributing

We love receiving pull requests! For specifics on how to contribute to this project, check out the [contributing file](CONTRIBUTING.md).
