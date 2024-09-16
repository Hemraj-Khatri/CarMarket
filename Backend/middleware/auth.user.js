import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const checkAuth = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    let err = new Error("You must be logged in !");
    err.status = 401;
    throw err;
  }
  // let err = res.status(401).json({ Message: "You must be logged in !" });

  try {
    let { userId } = jwt.verify(token, process.env.JWT_SECRET);
    let userdetail = await User.findById(userId).select("-password");
    req.user = userdetail;
    next();
  } catch (error) {
    let err = new Error("Invalid Token");
    err.status = 401;
    throw err;
  }
};

const checkAdmin = async (req, res, next) => {
  let { isAdmin } = req.user;
  if (isAdmin) {
    next();
  } else {
    let err = new Error("You are not authorized to perform this operation");
    err.status = 403;
    throw err;
  }
};
export { checkAdmin, checkAuth };
