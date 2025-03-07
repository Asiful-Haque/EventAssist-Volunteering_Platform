const express = require("express");
require("dotenv").config();
const cors = require("cors");
// const pool = require("./db");
const userRouter = require("./routes/UserRouter");

const app = express();


app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request body

app.use("/api/users", userRouter)

app.get("/", (req, res) => {
    res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
