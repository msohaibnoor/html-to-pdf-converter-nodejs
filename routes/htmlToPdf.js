import express from "express";
const router = express.Router();
import { htmlConversion } from "../controllers/htmlConversion.js";

// router.route("/").put( updateOrderToDelivered);
router.post("/", htmlConversion);

export default router;
