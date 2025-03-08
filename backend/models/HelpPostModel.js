// backend/models/UserModel.js
const pool = require("../config/db");

async function createHelpPost(title, description, urgency, userId) {
    const result = await pool.query(
        `INSERT INTO help_req (title, description, urgency, user_id) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
        [title, description, urgency, userId]
    );
    return result.rows[0];
}

async function getHelpPost(userId) {
    const result = await pool.query(`select * from help_req where user_id = $1`, [userId]);
    return result.rows;
}

module.exports = {
    createHelpPost,
    getHelpPost,
};
