import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT;

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  })
);
