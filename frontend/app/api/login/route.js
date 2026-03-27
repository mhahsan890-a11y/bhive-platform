import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const foundUser = users.find((u) => u.email === email);

    if (!foundUser) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 400 }
      );
    }

    const isMatch = bcrypt.compareSync(password, foundUser.password);

    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { email: foundUser.email, role: foundUser.role },
      "secretkey",
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      {
        message: "Login successful",
        token,
        role: foundUser.role,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}