const express = require("express");
const TeamController = require("../controllers/TeamController");

const router = express.Router();

router.get("/get_teams", TeamController.getTeams);
router.post("/add_teams", TeamController.createTeam);

module.exports = router;