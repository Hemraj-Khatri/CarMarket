import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    // User reference
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },

    // Car Details
    listingTitle: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: String,
    },
    sellingPrice: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Sedan",
        "SUV",
        "Truck",
        "Coupe",
        "Convertible",
        "Van",
        "Hatchback",
        "Electric",
        "Hybrid",
      ],
      required: true,
    },
    condition: {
      type: String,
      enum: ["New", "Used", "Certified Pre-Owned"],
      required: true,
    },
    make: {
      type: String,
      enum: [
        "Toyota",
        "Honda",
        "Ford",
        "Audi",
        "Tesla",
        "BMW",
        "Volkswagen",
        "Hyundai",
        "Nissan",
      ],
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    driveType: {
      type: String,
      enum: ["FWD", "RWD", "AWD", "4WD"],
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Automatic", "Manual", "CVT"],
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    cylinder: {
      type: Number,
    },
    door: {
      type: Number,
      required: true,
    },
    offerType: {
      type: String,
      enum: ["Buy", "Hot Offer", "Sell", "Urgent"],
      required: true,
    },
    description: {
      type: String,
      required: false,
    },

    // Features (checkboxes)
    features: {
      airConditioner: { type: Boolean, default: false },
      digitalOdometer: { type: Boolean, default: false },
      heater: { type: Boolean, default: false },
      leatherSeats: { type: Boolean, default: false },
      panoramicMoonroof: { type: Boolean, default: false },
      tachometer: { type: Boolean, default: false },
      touchscreenDisplay: { type: Boolean, default: false },
      antiLockBraking: { type: Boolean, default: false },
      brakeAssist: { type: Boolean, default: false },
      childSafetyLocks: { type: Boolean, default: false },
      driverAirBag: { type: Boolean, default: false },
      powerDoorLocks: { type: Boolean, default: false },
      stabilityControl: { type: Boolean, default: false },
      tractionControl: { type: Boolean, default: false },
      fogLightsFront: { type: Boolean, default: false },
      rainSensingWiper: { type: Boolean, default: false },
      rearSpoiler: { type: Boolean, default: false },
      windowsElectric: { type: Boolean, default: false },
      comfortConvenience: { type: Boolean, default: false },
      androidAuto: { type: Boolean, default: false },
      appleCarPlay: { type: Boolean, default: false },
      bluetooth: { type: Boolean, default: false },
      homeLink: { type: Boolean, default: false },
      powerSteering: { type: Boolean, default: false },
      vanityMirror: { type: Boolean, default: false },
    },

    // Image Upload
    images: {
      type: [String], // Array of image URLs or paths
    },
  },
  {
    timestamps: true,
  }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
