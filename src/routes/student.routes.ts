import express from "express";
import multer from "multer";
import path from "path";

import {
  student,
  updateData,
  uploadImage,
} from "../controllers/student.controller";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (_req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.get("/", student);
router.put("/update_data", updateData);
router.put("/upload_image", upload.single("image"), uploadImage);

export default router;
