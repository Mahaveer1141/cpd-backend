import express from "express";

import { authenticateRequest } from "../middlewares/authMiddleware";
import authRoutes from "./auth.routes";
import studentRoutes from "./student.routes";
import companyRoutes from "./company.routes";

const router = express.Router();

router.use("/auth", authRoutes);
// router.use("/student", studentRoutes);
router.use("/student", authenticateRequest, studentRoutes);
router.use("/company", companyRoutes);

export default router;
