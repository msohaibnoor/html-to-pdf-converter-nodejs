import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import htmlToPdf from "./routes/htmlToPdf.js";

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/htmlToPdf", htmlToPdf);
app.get("/", (req, res) => {
  res.send("Server is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running  on port ${PORT}`));
