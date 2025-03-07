// backend/models/UserModel.js
const pool = require("../config/db");

// Create a new user
async function createUser(fullName, email, hashedPassword, age, gender, skills, causes) {
    const result = await pool.query(
        `INSERT INTO users (full_name, email, password, age, gender, skills, causes) 
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING user_id, full_name, email`,
        [fullName, email, hashedPassword, age, gender, skills, causes]
    );
    return result.rows[0];
}

// Find a user by email
async function findUserByEmail(email) {
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0]; // Return user object if found, otherwise null
}

module.exports = { createUser, findUserByEmail };
