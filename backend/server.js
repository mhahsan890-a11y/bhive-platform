const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// test API
app.get("/api/test", (req, res) => {
  res.json({
    message: "API working",
    status: "success",
  });
});

// 👥 USERS (admin + tenant)
const users = [
  {
    email: "admin@test.com",
    password: bcrypt.hashSync("123456", 10),
    role: "admin",
  },
  {
    email: "tenant@test.com",
    password: bcrypt.hashSync("123456", 10),
    role: "tenant",
  },
];

// 🔐 LOGIN API
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  const foundUser = users.find((u) => u.email === email);

  if (!foundUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = bcrypt.compareSync(password, foundUser.password);

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid password" });
  }

  const token = jwt.sign(
    { email: foundUser.email, role: foundUser.role },
    "secretkey",
    { expiresIn: "1h" }
  );

  res.json({
    message: "Login successful",
    token,
    role: foundUser.role,
  });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});