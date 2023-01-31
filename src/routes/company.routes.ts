import express from "express";
import { addCompany, getCompany } from "../controllers/company.controller";

const router = express.Router();

router.get("/", getCompany);
router.post("/add_company", addCompany);

export default router;
