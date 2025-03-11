const pool = require("../config/db");

async function getTeamsQuery() {
    const result = await pool.query(`select * from Teams`);
    return result.rows;
}

async function createTeamQuery(teamType, teamName, teamDescription) {
    const result = await pool.query(
        `INSERT INTO teams (team_type, team_name, team_description) 
         VALUES ($1, $2, $3) RETURNING *`,
        [teamType, teamName, teamDescription]
    );
    return result.rows[0];
}


module.exports = {
    getTeamsQuery,
    createTeamQuery,
};