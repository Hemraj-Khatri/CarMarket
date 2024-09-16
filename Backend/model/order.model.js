import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    orderItems: [
      {
        listingTitle: { type: String },
        images: { type: String },
        sellingPrice: { type: Number },
        listing: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Listing",
          required: true,
        },
      },
    ],
    shippingAddress: {
      name: { type: String, required: true },
      contact: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
    },
    itemPrice: {
      type: Number,
    },
    shippingCharge: {
      type: Number,
      default: 5,
    },
    totalPrice: {
      type: Number,
      // required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "in progress", "cancelled", "delivered"],
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
