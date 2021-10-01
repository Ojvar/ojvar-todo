const ServerConfig = require("./configs/server");

const path = require("path");
const express = require("express");
const app = express();

app.set("view engine", "pug");
// app.set("views", path.resolve("views"));

/* Define routes */
app.use(require("./routes"));

/* Start Listening */
app.listen(ServerConfig.PORT, () => {
    console.log(
        "Server is initalized and listening on port " + ServerConfig.PORT,
    );
});
