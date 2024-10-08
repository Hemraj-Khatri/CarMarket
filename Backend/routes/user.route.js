import express from "express";
import {
  signup,
  login,
  logout,
  getAllusers,
  getUserById,
  updateUser,
} from "../controller/user.controller.js";

import contactUser from "../controller/userContact.controller.js";
import { checkAdmin, checkAuth } from "../middleware/auth.user.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.put("/updateUser/:id", checkAuth, updateUser);
router.get("/allUsers", checkAuth, checkAdmin, getAllusers);
router.post("/contactUser", checkAuth, contactUser);
router.get("/:id", checkAuth, getUserById);
// router.get("/api/v1/users/:id", getUserById);

export default router;
