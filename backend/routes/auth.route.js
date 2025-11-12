import express from "express";

const router = express.Router();

router.get("/signup", authRoutes);

export default router;
