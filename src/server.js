const ServerConfig = require("./configs/server");

const path = require("path");
const express = require("express");
const app = express();

/* Statics */
app.use("/resources", express.static(path.resolve("resource")));

/* Template engine */
app.set("view engine", "pug");
// app.set("views", path.resolve("views"));

app.use((req, res, next) => {
  res.setHeader("X-Powered-By", "Meysam Karimi");
  next();
});

/* Setup */
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next();
});

/* Define routes */
app.use(require("./routes"));

/* Start Listening */
app.listen(ServerConfig.PORT, () => {
  console.log(
    "Server is initalized and listening on port " + ServerConfig.PORT
  );
});
