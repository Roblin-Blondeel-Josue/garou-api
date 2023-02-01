const router = require("express").Router();
const controller = require("../controller/public");

router.get("/", controller.home);

module.exports = router;
