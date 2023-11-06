const express = require("express");
const expressConfig = require("./config/express.js");
const routeConfig = require("./config/routes.js");
const databaseConfig = require('./config/database.js')

const PORT = 3000;

async function start() {
  const app = express();
  await databaseConfig()
  expressConfig(app);
  routeConfig(app);
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start();