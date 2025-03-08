const express = require("express");
const HelpPostController = require("../controllers/HelpPostController");


const router = express.Router();

//Create Help post route
router.post("/create_post", HelpPostController.createPost);
router.post("/getPosts", HelpPostController.getPosts);

module.exports = router;
