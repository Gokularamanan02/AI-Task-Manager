const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// Import Routes
const authRoutes = require("./routes/AuthRoutes");
const taskRoutes = require("./routes/TaskRoutes");

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*"
}));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Backend Running Successfully"
    });
});

// =============================
// Debug Environment Variables
// =============================
console.log("=================================");
console.log("MONGO_URI exists:", !!process.env.MONGO_URI);

if (process.env.MONGO_URI) {
    console.log(
        "MONGO_URI starts with:",
        process.env.MONGO_URI.substring(0, 40) + "..."
    );
} else {
    console.log("❌ MONGO_URI NOT FOUND");
}

console.log("JWT_SECRET exists:", !!process.env.JWT_SECRET);
console.log("=================================");

// =============================
// MongoDB Connection
// =============================
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Error");
        console.error(err);
    });

// =============================
// Start Server
// =============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});