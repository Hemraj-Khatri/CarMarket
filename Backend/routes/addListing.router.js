import express from "express";
import {
  AddListing,
  allListings,
  getCertifiedListings,
  getListById,
  getNewListings,
  getUsedListings,
  recentListings,
} from "../controller/addListing.controller.js";
import { checkAdmin, checkAuth } from "../middleware/auth.user.js";

const router = express.Router();

// Routes
router.post("/addListing", checkAuth, AddListing);
router.get("/allListings", allListings);
router.get("/recentListings", recentListings);
router.get("/newListings", getNewListings);
router.get("/usedListings", getUsedListings);
router.get("/certifiedListings", getCertifiedListings);
router.get("/:id", getListById);

export default router;
