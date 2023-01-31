import express from "express";

import { student, updateData } from "../controllers/student.controller";

const router = express.Router();

router.get("/", student);
router.put("/update_data", updateData);

export default router;
