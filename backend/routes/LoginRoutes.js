// const express = require("express");
// const router = express.Router();

// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");

// router.post("/login", async (req, res) => {
//     try {

//         const { email, password } = req.body;

//         // Check if email and password are provided
//         if (!email || !password) {
//             return res.status(400).json({
//                 message: "Email and password are required"
//             });
//         }

//         // Find user
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }

//         // Compare password
//         const isMatch = await bcrypt.compare(password, user.password);

//         if (!isMatch) {
//             return res.status(401).json({
//                 message: "Invalid password"
//             });
//         }

//         // Generate JWT Token
//         const token = jwt.sign(
//             {
//                 id: user._id,
//                 email: user.email
//             },
//             "mysecretkey",
//             {
//                 expiresIn: "1d"
//             }
//         );

//         // Success
//         res.status(200).json({
//             success: true,
//             message: "Login successful",
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email
//             }
//         });

//     } catch (error) {
//         console.error(error);

//         res.status(500).json({
//             success: false,
//             message: "Internal Server Error"
//         });
//     }
// });

// module.exports = router;