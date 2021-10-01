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

/**
 * Index page
 */
router.get("/:username?", (req, res, next) => {
    res.render("index.pug", {
        username: req.params.username || "My Dear Visitor",
    });
});
