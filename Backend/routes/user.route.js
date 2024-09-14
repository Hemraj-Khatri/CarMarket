import express from "express"
import {signup, login, logout, getAllusers, getUserById}  from "../controller/user.controller.js"

import contactUser from "../controller/userContact.controller.js"
const router = express.Router();

router.post("/signup" , signup)
router.post("/login" , login)
router.post("/logout" , logout)
router.get("/allUsers" , getAllusers)
router.post("/contactUser" , contactUser)
router.get("/:id", getUserById);
// router.get("/api/v1/users/:id", getUserById);


export default router;



