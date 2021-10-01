const express = require("express");
const path = require("path");

const router = express.Router();
module.exports = router;

/**
 * Handle undefined routes
 */
router.use((req, res, next) => {
    res.render("errors/404.pug");
});
