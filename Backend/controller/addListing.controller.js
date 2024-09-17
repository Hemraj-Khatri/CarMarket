import Listing from "../model/addListing.model.js";

// /api/v1/listing/addListing
// method: "POST"
const AddListing = async (req, res) => {
  try {
    // Extract data from the request body
    const {
      listingTitle,
      tagline,
      originalPrice,
      sellingPrice,
      category,
      condition,
      make,
      model,
      year,
      driveType,
      transmission,
      fuelType,
      mileage,
      cylinder,
      door,
      offerType,
      description,
      features,
      images,
    } = req.body;

    if (
      !listingTitle ||
      !tagline ||
      !sellingPrice ||
      !category ||
      !condition ||
      !make ||
      !model ||
      !year ||
      !driveType ||
      !transmission ||
      !fuelType ||
      !mileage ||
      !door ||
      !offerType ||
      !description
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userId = req.user._id; // Use userId from req.user

    // Create a new listing instance
    let addListing = await Listing.create({
      listingTitle,
      tagline,
      originalPrice,
      sellingPrice,
      category,
      condition,
      make,
      model,
      year,
      driveType,
      transmission,
      fuelType,
      mileage,
      cylinder,
      door,
      offerType,
      description,
      features,
      images,
      createdBy: userId, // Set the reference to the user who created the listing
    });

    // Send a success response
    res
      .status(201)
      .json({ message: "Listing added successfully!", addListing });
  } catch (error) {
    console.error("Error adding listing:", error);
    res
      .status(500)
      .json({ message: "Failed to add listing", error: error.message });
  }
};

// Get all listings
// /api/v1/listing/allListings
// method: "GET"
const allListings = async (req, res) => {
  try {
    let listings = await Listing.find();
    res.status(200).json({
      success: true,
      data: listings,
    });
  } catch (error) {
    console.log(error);
    res.status(501).json({
      success: false,
      message: "Failed to get all Listings",
    });
  }
};

// Get top 9 listings
// /api/v1/listing/topListings
// method: "GET"
const recentListings = async (req, res) => {
  try {
    // Fetch the top 9 listings sorted by createdAt in descending order
    let topListings = await Listing.find().sort({ createdAt: -1 }).limit(9);

    res.status(200).json({
      success: true,
      data: topListings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get top listings",
    });
  }
};

// Get a listing by ID
// /api/v1/listing/:id
// method: "GET"
const getListById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the listing by ID and populate the createdBy field with user details
    const listing = await Listing.findById(id).populate("createdBy");

    if (!listing) {
      return res.status(404).json({
        success: false,
        message: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      data: listing,
    });
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    res.status(500).json({
      success: false,
      message: "Failed to get the car",
    });
  }
};

// Get new car listings
// /api/v1/listing/newListings
// method: "GET"
const getNewListings = async (req, res) => {
  try {
    // Fetch listings where condition is "New"
    let newListings = await Listing.find({ condition: "New" });

    res.status(200).json({
      success: true,
      data: newListings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get new listings",
    });
  }
};

// Get used car listings
// /api/v1/listing/usedListings
// method: "GET"
const getUsedListings = async (req, res) => {
  try {
    let usedListings = await Listing.find({ condition: "Used" });
    res.status(200).json({
      success: true,
      data: usedListings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get used listings",
    });
  }
};

// Get certified pre-owned car listings
// /api/v1/listing/certifiedListings
// method: "GET"
const getCertifiedListings = async (req, res) => {
  try {
    let certifiedListings = await Listing.find({
      condition: "Certified Pre-Owned",
    });
    res.status(200).json({
      success: true,
      data: certifiedListings,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to get certified pre-owned listings",
    });
  }
};

const getSedanCategory = async (req, res) => {
  try {
    let SedanCategory = await Listing.find({ category: "Sedan" });
    res.status(200).json({ success: true, data: SedanCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get SendanCategory cars" });
  }
};

const getElectricCategory = async (req, res) => {
  try {
    let ElectricCategory = await Listing.find({ category: "Electric" });
    res.status(200).json({ success: true, data: ElectricCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get Electric Category" });
  }
};

const getSUVCategory = async (req, res) => {
  try {
    let SUVCategory = await Listing.find({ category: "SUV" });
    res.status(200).json({ success: true, data: SUVCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get SUV Category" });
  }
};

const getConvertibleCategory = async (req, res) => {
  try {
    let ConvertibleCategory = await Listing.find({ category: "Convertible" });
    res.status(200).json({ success: true, data: ConvertibleCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get Convertible Category" });
  }
};

const getCoupeCategory = async (req, res) => {
  try {
    let CoupeCategory = await Listing.find({ category: "Coupe" });
    res.status(200).json({ success: true, data: CoupeCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get Coupe Category" });
  }
};

const getVanCategory = async (req, res) => {
  try {
    let VanCategory = await Listing.find({ category: "Van" });
    res.status(200).json({ success: true, data: VanCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get Van Category" });
  }
};
const getTruckCategory = async (req, res) => {
  try {
    let TruckCategory = await Listing.find({ category: "Truck" });
    res.status(200).json({ success: true, data: TruckCategory });
  } catch (error) {
    console.log(error);
    res
      .status(404)
      .json({ success: false, Message: "Failed to get Truck Category" });
  }
};

// Edit a listing by ID
// /api/v1/listing/edit/:id
// method: "PUT"

const editListing = async (req, res) => {
  try {
    const listingId = req.params.id;

    // Extract data from the request body
    const {
      listingTitle,
      tagline,
      originalPrice,
      sellingPrice,
      category,
      condition,
      make,
      model,
      year,
      driveType,
      transmission,
      fuelType,
      mileage,
      cylinder,
      door,
      offerType,
      description,
      features,
      images,
    } = req.body;

    // Find the listing by ID
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    // Update listing fields only if new values are provided
    listing.listingTitle = listingTitle || listing.listingTitle;
    listing.tagline = tagline || listing.tagline;
    listing.originalPrice = originalPrice || listing.originalPrice;
    listing.sellingPrice = sellingPrice || listing.sellingPrice;
    listing.category = category || listing.category;
    listing.condition = condition || listing.condition;
    listing.make = make || listing.make;
    listing.model = model || listing.model;
    listing.year = year || listing.year;
    listing.driveType = driveType || listing.driveType;
    listing.transmission = transmission || listing.transmission;
    listing.fuelType = fuelType || listing.fuelType;
    listing.mileage = mileage || listing.mileage;
    listing.cylinder = cylinder || listing.cylinder;
    listing.door = door || listing.door;
    listing.offerType = offerType || listing.offerType;
    listing.description = description || listing.description; // Must include this if it's required
    listing.features = features || listing.features;
    listing.images = images || listing.images;

    // Save the updated listing
    const updatedListing = await listing.save();
    return res.status(200).json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (error) {
    console.error("Error updating listing:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update listing",
      error: error.message,
    });
  }
};

export {
  AddListing,
  allListings,
  recentListings,
  getListById,
  getNewListings,
  getUsedListings,
  getCertifiedListings,
  getSedanCategory,
  getElectricCategory,
  getSUVCategory,
  getConvertibleCategory,
  getCoupeCategory,
  getVanCategory,
  getTruckCategory,
  editListing, // Export the new function
};
