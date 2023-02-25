import { Request, Response, NextFunction } from "express";

import {
  studentPersonalDetail,
  studentAcademicDetail,
  studentProfessionalDetail,
  studentCoCurricularDetail,
} from "../schemas/student.schema";
import { updateStudentData, getOneStudent } from "../services/student.service";

export async function student(req: Request, res: Response, next: NextFunction) {
  try {
    const result = await getOneStudent({ _id: req.userId });
    res.json({ user: result });
  } catch (err) {
    next(err);
  }
}

export async function updateData(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { section, ...formData } = req.body;
    const updateData = formData[section];
    let validatedFormData = null;
    switch (section) {
      case "personalDetail":
        validatedFormData = studentPersonalDetail.parse(updateData);
        break;

      case "academicDetail":
        validatedFormData = studentAcademicDetail.parse(updateData);
        break;

      case "professionalDetail":
        validatedFormData = studentProfessionalDetail.parse(updateData);
        break;

      case "coCurricularDetail":
        validatedFormData = studentCoCurricularDetail.parse(updateData);
        break;

      default:
        throw new Error("Student update section must be provided");
    }
    await updateStudentData(req.userId, section, validatedFormData);
    const added = await getOneStudent({ _id: req.userId });
    res.json({ result: added });
  } catch (err) {
    next(err);
  }
}

export async function uploadImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { file } = req;
    if (!file) {
      res.json({ message: "no image uploaded" });
      return;
    }
    res.json({ message: "uploaded" });
  } catch (err) {
    console.log(err);
    next(err);
  }
}
