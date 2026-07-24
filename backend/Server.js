const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const taskRoutes = require("./routes/TaskRoutes");
dotenv.config();

const app = express();


// Middleware
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// Routes
const authRoutes = require("./routes/AuthRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {

    res.json({
        message: "Backend Running Successfully"
    });

});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)

.then(() => {

    console.log("✅ MongoDB Connected");

})

.catch((err) => {

    console.log("❌ MongoDB Connection Error:", err.message);

});


// Server Start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`🚀 Server running on http://localhost:${PORT}`);

});