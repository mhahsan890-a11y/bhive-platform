const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

const PORT = Number(process.env.PORT) || 5000;
const HOST = "0.0.0.0";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Backend is running");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "API working",
    status: "success",
  });
});

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

app.post("/api/login", (req, res) => {
  try {
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

    return res.status(200).json({
      message: "Login successful",
      token,
      role: foundUser.role,
    });
  } catch (error) {
    console.error("Login route error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});