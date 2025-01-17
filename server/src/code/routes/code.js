import express from "express";
import { createChat } from "../controller/code.js";
const router = express.Router();
router.post("/", createChat);
export default router;
