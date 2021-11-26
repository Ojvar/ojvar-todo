const express = require("express");
const path = require("path");

const router = express.Router();
module.exports = router;

/**
 * About page
 */
router.get("/about", (req, res, next) => {
    res.render("about.pug");
});

/**
 * Contact us page
 */
router.get("/contact-us", (req, res, next) => {
    res.render("contact-us.pug");
});
router.post("/contact-us", (req, res, next) => {
    const { email, comment } = req.body;

    /* Validate user data */
    if (email == undefined || comment == undefined) {
        res.sendStatus(400);
        return;
    }

    /* Send response */
    const message = `Dear ${email} <br/>
    Your comment is admitted <br/>
    We appreciate it ;)`;

    res.send({
        message,
        comment,
    });
});

/**
 * Index page
 */
router.get("/:username?", (req, res, next) => {
    res.render("index.pug", {
        username: req.params.username || "My Dear Visitor",
    });
});
