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

    // req.rawBody = "";
    // req.setEncoding("utf8");
    // req.on("data", function (chunk) {
    //     req.rawBody += chunk;
    // });
    // req.on("end", function () {
    //     if(req.headers['content-type'] == "application/json") {
    //         req.body = JSON.parse(req.rawBody);
    //     }
    //     console.log(req.rawBody)
    //     console.log(req.body)
    //     next();
    // });
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
