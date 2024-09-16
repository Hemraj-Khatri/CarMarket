import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import listRouter from "./routes/addListing.router.js";
import userRouter from "./routes/user.route.js";
import orderRouter from "./routes/order.router.js";
import uploadRouter from "./routes/uploadImage.router.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
//initialize express app
const app = express();

//middleware
config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// this is use for make static folder (image)
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

//cors
// app.use(cors());
// Enable CORS with specific configurations
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies) to be sent
  })
);

app.use(bodyParser.json());
app.use(cookieParser());

app.use("/api/v1/listing", listRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/image", uploadRouter);

export default app;
