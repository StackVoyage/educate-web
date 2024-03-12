import dotenv from "dotenv";
import express from "express";
import "./db/index.js"; // Import the database connection
import userRouter from "./routes/user.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", userRouter);

const port = process.env.PORT; // Default to 8000 if PORT is not defined

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
