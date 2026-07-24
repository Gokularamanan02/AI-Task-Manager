const express = require("express");
const router = express.Router();

const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// ================= SIGNUP =================

router.post("/signup", async (req, res) => {

    try {

        const { name, email, password } = req.body;


        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }


        const existingUser = await User.findOne({ email });


        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });


        res.status(201).json({
            success: true,
            message: "Signup successful",
            user: {
                name: user.name,
                email: user.email
            }
        });


    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});



// ================= LOGIN =================

router.post("/login", async (req, res) => {

    try {


        const { email, password } = req.body;


        console.log("LOGIN REQUEST:");
        console.log("Email:", email);
        console.log("Password:", password);



        if (!email || !password) {

            return res.status(400).json({
                message: "Email and password required"
            });

        }



        const user = await User.findOne({ email });



        console.log("USER FOUND:", user);



        if (!user) {

            return res.status(404).json({
                message: "User not found"
            });

        }



        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );



        console.log("PASSWORD MATCH:", passwordMatch);



        if (!passwordMatch) {

            return res.status(401).json({
                message: "Invalid password"
            });

        }



        const token = jwt.sign(

            {
                id: user._id,
                email: user.email
            },

            process.env.JWT_SECRET || "mysecretkey123",

            {
                expiresIn: "1d"
            }

        );



        console.log("TOKEN CREATED");



        res.status(200).json({

            success: true,

            message: "Login successful",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email

            }

        });



    } catch (error) {


        console.log("LOGIN ERROR:", error);


        res.status(500).json({

            success: false,

            message: error.message

        });


    }

});



module.exports = router;