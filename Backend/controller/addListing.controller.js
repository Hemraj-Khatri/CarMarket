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

    if (!listingTitle || !tagline || !sellingPrice || !category || !condition || !make || !model || !year || !driveType || !transmission || !fuelType || !mileage || !door || !offerType || !description) {
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
    const listing = await Listing.findById(id).populate('createdBy');

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
    let certifiedListings = await Listing.find({ condition: "Certified Pre-Owned" });
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

export { AddListing, allListings, recentListings, getListById, getNewListings, getUsedListings, getCertifiedListings };
