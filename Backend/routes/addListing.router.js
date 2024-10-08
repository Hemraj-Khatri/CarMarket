import express from "express";
import {
  AddListing,
  allListings,
  deleteListing,
  editListing,
  getCertifiedListings,
  getConvertibleCategory,
  getCoupeCategory,
  getElectricCategory,
  getListById,
  getNewListings,
  getSedanCategory,
  getSUVCategory,
  getTruckCategory,
  getUsedListings,
  getVanCategory,
  recentListings,
  searchListings,
} from "../controller/addListing.controller.js";
import { checkAdmin, checkAuth } from "../middleware/auth.user.js";

const router = express.Router();

// Routes
router.post("/addListing", checkAuth, checkAdmin, AddListing);
router.get("/allListings", allListings);
router.get("/recentListings", recentListings);
router.get("/newListings", getNewListings);
router.get("/usedListings", getUsedListings);
router.get("/certifiedListings", getCertifiedListings);
router.get("/sedanCategory", getSedanCategory);
router.get("/electricCategory", getElectricCategory);
router.get("/SUVCategory", getSUVCategory);
router.get("/ConvertibleCategory", getConvertibleCategory);
router.get("/CoupeCategory", getCoupeCategory);
router.get("/VanCategory", getVanCategory);
router.get("/TruckCategory", getTruckCategory);
router.get("/search", searchListings);
router.put("/edit/:id", checkAuth, checkAdmin, editListing);
router.delete("/delete/:id", checkAuth, checkAdmin, deleteListing);
router.get("/:id", getListById);

export default router;
