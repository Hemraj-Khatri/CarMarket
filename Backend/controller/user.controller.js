import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

// uri:/api/v1/users/signup
//method: post
//Signup or Register
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender, isAdmin } =
      req.body;
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ message: "All fields are required" });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ message: "Username already exit try different" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // profilePhoto
    const maleProfilePhoto = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePhoto = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullName,
      username,
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
      gender,
      isAdmin,
    });
    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

//uri: /api/v1/users/login
//Login
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect username or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect username or password",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        Message: "login Successfully",
        user: {
          username: user.username,
          fullName: user.fullName,
          profilePhoto: user.profilePhoto,
          _id: user._id,
          isAdmin: user.isAdmin,
        },
      });
  } catch (error) {
    console.log(error);
  }
};

//uri: /api/v1/users/logout
//Logout
export const logout = (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logged out successfully.",
    });
  } catch (error) {
    console.log(error);
  }
};
//uri: /api/v1/users/allUsers
// method:"GET"
export const getAllusers = async (req, res) => {
  try {
    let users = await User.find().select("-password");
    res.send(users);
  } catch (error) {
    console.log(error);
  }
};

//uri: /api/v1/users/:id
// method: "GET"
export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id; // Match the parameter name
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
};

//uri: /api/v1/users/:id
// method: "PUT"
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id; // Get user ID from request params
    const { fullName, username, password, confirmPassword } = req.body;

    // Ensure required fields are provided
    if (!fullName || !username) {
      return res
        .status(400)
        .json({ message: "Full Name and Username are required." });
    }

    // Check if password is being updated and matches confirmPassword
    if (password && password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Update user fields
    user.fullName = fullName || user.fullName;
    user.username = username || user.username;

    // Hash the new password if it's being updated
    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    // Save the updated user
    await user.save();

    return res.status(200).json({
      message: "User updated successfully.",
      user: {
        username: user.username,
        fullName: user.fullName,
      },
    });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Server error." });
  }
};
