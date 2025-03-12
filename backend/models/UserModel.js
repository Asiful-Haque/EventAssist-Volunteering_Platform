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
    return result.rows[0]; 
}

//adding the history
async function createVolHistory(userId, eventName, totalHours) {
    const result = await pool.query(
        `INSERT INTO volunteering_history (user_id, event_name, total_hours) 
             VALUES ($1::int, $2, $3) RETURNING *`,
        [userId, eventName, totalHours]
    );
    return result.rows[0];
}

async function updateUserQuery(fullName, email, age, gender, skills, causes, userId) {
    const result = await pool.query(
        `UPDATE users 
         SET full_name = $1, email = $2, age = $3, gender = $4, skills = $5, causes = $6 
         WHERE user_id = $7 
         RETURNING *`,
        [fullName, email, age, gender, skills, causes, userId]
    );

    return result.rows[0];
}


const getVolHistoryByUserId = async (userId) => {
    const result = await pool.query("SELECT * FROM volunteering_history WHERE user_id = $1", [
        userId,
    ]);
    return result.rows; 
};

const findUserById = async (userId) => {
    try {
        const result = await pool.query("SELECT * FROM users WHERE user_id = $1", [userId]);
        return result.rows[0]; 
    } catch (error) {
        console.error("Error fetching user:", error);
        throw new Error("Error fetching user data");
    }
};


module.exports = {
    createUser,
    findUserByEmail,
    createVolHistory,
    getVolHistoryByUserId,
    findUserById,
    updateUserQuery,
};
