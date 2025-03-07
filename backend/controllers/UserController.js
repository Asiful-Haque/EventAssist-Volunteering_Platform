const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/UserModel");
const JWT_SECRET = process.env.JWT_SECRET;

const UserController = {};

// Register a new user
UserController.registerUser = async (req, res) => {
    try {
        const { fullName, email, password, age, gender, skills, causes } = req.body;

        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user in DB
        const newUser = await createUser(
            fullName,
            email,
            hashedPassword,
            age,
            gender,
            skills,
            causes
        );

        res.status(201).json({
            message: "User registered successfully",
            user: { id: newUser.id, name: newUser.name, email: newUser.email },
        });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// Login user
UserController.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(email,password);
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
        
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

module.exports = UserController;