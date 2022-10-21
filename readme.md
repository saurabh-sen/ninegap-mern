
# NineGap Internship Assessment

A web application which id developed using react.js for strengthing the frontend, express.js for the backend/api development and for storing clients data MongoDB Atlas is used.

## Visit deployed project

[click here](https://ninegap-mern.herokuapp.com/)

## Documentation

### Frontend libraries and frameworks

- [#vite](https://vitejs.dev/guide/) ([#react.js](https://reactjs.org/)) which is a build tool that aims to provide a faster and leaner development experience for modern web projects.

- [react-router-dom V6]() is used for providing routing in our Frontend.

- [TailwindCSS](http://tailwindcss.com/) is used for developing mobile responsive design and fast User Interface design.

### Backend libraries and frameworks

- [express](https://www.npmjs.com/package/express) is used for developing Backend api's with less work load.

- [bcrypt.js](https://www.npmjs.com/package/bcrypt) is used for creating hash of client's password.

- [dotenv](https://www.npmjs.com/package/dotenv) is used accessing the evironment variables for our server.

- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) is used for generating tokens which are further used with authentication.

- [mongoose](https://www.npmjs.com/package/mongoose) is used for connecting the MongoDB Atlas and for designing database schema.

## API Reference

These are the api routes developed using express.js

#### login api

```http
  POST /v1/login
```

#### signup api

```http
  POST /v1/signup
```

#### dashboard api

```http
  POST /dashboard
```

## Installation

Install my-project with npm

- download zip file or clone the github repository

```bash
  git clone https://github.com/saurabh-sen/ninegap-mern.git
```
- install the packages

```bash
  npm install
```
- start the express server

```bash
  nodemon app.js
```
- start the frontend

```bash
  npm run dev
```
your project will be running at [localhost://3000](http://127.0.0.1:3000).

## Environment Variables

To run this project, you will need to add the following environment variables to your config.env file

`MONGO_URI=YOUR_CONNECTION_URL`

`SECRET_KEY=YOUR_SUPER_SECRET_KEY`

