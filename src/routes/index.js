const express = require("express");

/* Define global router */
const router = express.Router();
module.exports = router;

/* Import sub-routers */
router.use(require("./home"));
router.use(require("./tasks"));

/* Keep this at last */
router.use(require("./errors"));
