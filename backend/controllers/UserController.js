const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser, createVolHistory, getVolHistoryByUserId, findUserById } = require("../models/UserModel");
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
        console.log("user id for token is ",user.user_id);
        // Generate JWT token
        const token = jwt.sign({ userId: user.user_id }, JWT_SECRET, { expiresIn: "1h" });

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

UserController.addHistory = async (req, res) => {
    try {
        const tokenFromLocalStorage = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
        if (!tokenFromLocalStorage) {
            return res.status(401).json({ message: "No token provided" });
        }

        //if found then checking for hte id's
        const decoded = jwt.verify(tokenFromLocalStorage, JWT_SECRET);
        console.log("veiried token ",decoded);
        const userId = parseInt(decoded.userId, 10);
        console.log("use id is ",userId);
        console.log("User ID type:", typeof userId);

        const { event_name, total_hours } = req.body;
        console.log("history is ", event_name, total_hours);
        
        // console.log(email,password);
        const history = await createVolHistory(userId, event_name, total_hours);
        if (!history) {
            return res.status(400).json({ message: "Not found" });
        }
        res.status(201).json({
            message: "History added successfully",
            user: { id: history.userId, eventName: history.eventName },
        });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

UserController.getHistory = async (req, res) => {
    try {
        const tokenFromLocalStorage = req.headers.authorization?.split(" ")[1]; // "Bearer <token>"
        if (!tokenFromLocalStorage) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(tokenFromLocalStorage, JWT_SECRET);
        console.log("Verified token:", decoded);
        const userId = parseInt(decoded.userId, 10);

        const history = await getVolHistoryByUserId(userId);

        if (!history || history.length === 0) {
            return res.status(404).json({ message: "No volunteering history found" });
        }

        res.status(200).json({ history });
    } catch (error) {
        console.error("Error fetching history:", error);
        res.status(500).json({ message: "Server error", error });
    }
};


 // Adjust based on your model


UserController.getUserData = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]; // Extract token from "Bearer <token>"
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        console.log("Verified token:", decoded);

        const userId = parseInt(decoded.userId, 10);

        if (!userId) {
            return res.status(400).json({ message: "Invalid token" });
        }

        const user = await findUserById(userId); 

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ user });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Server error", error });
    }
};



module.exports = UserController;
