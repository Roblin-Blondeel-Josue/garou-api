const express = require("express");

const router = express.Router();
const {
  getcharacters,
  getcharacter,
  createcharacter,
  updatecharacter,
  deletecharacter,
} = require("../controller/character");

router.post("/create", createcharacter);
router.get("/characters", getcharacters);
router.get("/character/:code", getcharacter);
router.put("/character/:code", updatecharacter);
router.delete("/character/:code", deletecharacter);

module.exports = router;
