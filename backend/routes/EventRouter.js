const express = require("express");
const EventController = require("../controllers/EventController");

const router = express.Router();

router.post("/add_event", EventController.createEvent);

module.exports = router;
