import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const oldUser = await User.findOne({ email });
    if (oldUser) return res.status("402").json("Email already exists");

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
};

export const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const loginUser = await User.findOne({ email });

    if (!loginUser)
      return res.status(401).json({ error: "Email/password mismatch" });

    const matched = await loginUser.comparePassword(password);

    if (!matched)
      return res.status(401).json({ error: "Email/pasword mismatch" });

    const { _id, name, role } = loginUser;

    const jwtToken = jwt.sign({ userId: _id }, process.env.JWT_SECRET);

    res.json({
      signInUser: {
        id: _id,
        name,
        role,
        email,
        token: jwtToken,
      },
    });
  } catch (error) {
    console.error("Error signing in user:", error);
    res.status(500).json({ error: "An error occurred while signing in." });
  }
};
