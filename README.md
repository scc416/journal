# Journal

See the `master` branch's `README.md` for information about this application. This `README.md` (on branch `production`) is the documentation of the deployment (changes that need to be made for deployment to happen).

## Table of Content

- [Client](#client)
- [Server](#server)

## Client

1. New file: `public/_redirects`

```
/api/*  https://journal---api.herokuapp.com/api/:splat 200
/*  /index.html 200
```

## Server

1. Install cors and add settings to `server/server.js`

```
const cors = require("cors");

const corsOptions = {
  origin: "https://the-journals.netlify.app/",
  methods: "GET,POST,DELETE",
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
```

2. Include the script for starting the server, version of node and dependencies of server in `package.json`:

```
{
  "scripts": {
    "start": "node ./server/server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "chalk": "^5.0.1",
    "cookie-session": "^2.0.0",
    "cors": "^2.8.5",
    "dotenv": "^16.0.0",
    "express": "^4.17.3",
    "pg": "^8.7.3"
  },
  "engines": {
    "node": "17.3.0"
  }
}
```
