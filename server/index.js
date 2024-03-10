import express from "express";
import "./db/index.js"; // Import the database connection
import userRouter from "./routes/user.js";

const app = express();

app.use(express.json());
app.use("/api/auth", userRouter);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
