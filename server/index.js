import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// app.use("/api/auth", AuthRoute);

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

app.listen(PORT, () => {
  console.log("Server running on port:", PORT);
});
