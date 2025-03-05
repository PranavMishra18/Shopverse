const express = require("express");
const router = express.Router();

const User = require("../model/userModel");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(500).json({ error: "Email already in use." });
    }

    await newUser.save();
    res.status(200).json({
      message: "User created.",
      newUser: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);

    res.status(200).send({
      user: user,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;
