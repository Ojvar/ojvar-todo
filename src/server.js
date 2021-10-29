const ServerConfig = require("./configs/server");

const path = require("path");
const express = require("express");
const app = express();

/* Statics */
app.use("/resources", express.static(path.resolve("resource")));

/* Template engine */
app.set("view engine", "pug");
// app.set("views", path.resolve("views"));

/* Setup */
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    }),
);

/* Define routes */
app.use(require("./routes"));

/* Start Listening */
app.listen(ServerConfig.PORT, () => {
    console.log(
        "Server is initalized and listening on port " + ServerConfig.PORT,
    );
});
