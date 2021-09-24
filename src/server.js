const ServerConfig = require("./configs/server");

const path = require("path");
const express = require("express");
const app = express();

/**
 * Index page
 */
app.get("/", (req, res, next) => {
  res.sendFile(path.resolve("views/index.html"));
});

/**
 * Handle undefined routes
 */
app.use((req, res, next) => {
  res.sendFile(path.resolve("views/errors/404.html"));
});

/* Start Listening */
app.listen(ServerConfig.PORT, () => {
  console.log(
    "Server is initalized and listening on port " + ServerConfig.PORT
  );
});
