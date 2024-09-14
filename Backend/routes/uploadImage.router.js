import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads"); // Ensure the "uploads" directory exists
  },
  filename: (req, file, cb) => {
    let fn = Date.now() + "-" + file.originalname;
    cb(null, fn);
  },
});

const fileFilter = (req, file, cb) => {
  let imagePattern = /\.(jpg|jpeg|png|webp)$/; // Regex to match allowed image formats
  let isMatch = file.originalname.match(imagePattern);
  if (isMatch) cb(null, true);
  else cb(new Error("Only Image File"), false); // Structured error
};

const upload = multer({
  storage,
  fileFilter,
});

router.post(
  "/upload",
  upload.single("image"),
  async (req, res) => {
    try {
      res.send({
        message: "Image Uploaded",
        path: `/${req.file.path}`,
      });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ message: error.message || "An error occurred while uploading the image." });
    }
  }
);





export default router;
