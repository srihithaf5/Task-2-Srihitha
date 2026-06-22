const express = require("express");
const router = express.Router();

const users = require("../data/users");


// GET all users
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: users
  });
});


// GET user by id
router.get("/:id", (req, res) => {

  const user = users.find(
    u => u.id === Number(req.params.id)
  );

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json({
    success: true,
    data: user
  });
});


// POST new user
router.post("/", (req, res) => {

  const { name, email } = req.body;

  // Validation

  if (!name || !email) {
    return res.status(400).json({
      success: false,
      message: "Name and Email are required"
    });
  }

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User created successfully",
    data: newUser
  });
});

module.exports = router;