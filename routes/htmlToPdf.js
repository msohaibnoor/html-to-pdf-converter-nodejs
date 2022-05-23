import express from "express";
const router = express.Router();
import { htmlConversion } from "../controllers/htmlConversion.js";

router.post("/", htmlConversion);

export default router;
