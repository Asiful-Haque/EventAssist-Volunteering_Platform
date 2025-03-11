const { createTeamQuery } = require("../models/TeamModel");
const { getTeamsQuery } = require("../models/TeamModel");

const TeamController = {};

TeamController.getTeams = async (req, res) => {
    try {
        const teams = await getTeamsQuery();
        if (!teams || teams.length === 0) {
            return res.status(404).json({ message: "No teams found" });
        }
        res.status(200).json({ teams });
    } catch (error) {
        console.error("Error fetching teams:", error);
        res.status(500).json({ message: "Server error", error });
    }
};


TeamController.createTeam = async (req, res) => {
    try {
        const { type, name, description } = req.body;
        // console.log(type,name,description);

        if (!type || !name || !description) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newTeam = await createTeamQuery(type, name, description);

        res.status(201).json({
            message: "Team added successfully",
            team: newTeam,
        });
    } catch (error) {
        console.error("Error adding team:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = TeamController;