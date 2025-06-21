import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export const registerUser = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    if (!name || !email || !mobile || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }
    const hashed = await bcrypt.hash(password, 10);

    const user = new User({ name, email, mobile, password: hashed });
    await user.save();

    res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error.", data: error });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { userId: user._id, name: user.name, email: user.email, bio: user.bio },
      process.env.JWT_SECRET,
      {
        expiresIn: "7h",
      }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


export const getUserDetails = async (req, res) => {
  try {
    const userId = req.user; // userId added by authMiddleware

    const user = await User.findById(userId).select("-password"); // exclude password

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      },
    });
  } catch (err) {
    console.error("Get User Error:", err.message);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


export const logout=async(req,res)=>{
    try {
        res.cookie("token", "", {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      expires:new Date(0),
    });

    res.status(200).json({message:"Logout Successfull"});
    } catch (error) {
            return res.status(500).json({ message: "Server error", error });

    }
}
