import { Request, Response, NextFunction } from "express";
import { createCompany, findCompany } from "../services/company.service";

export async function getCompany(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const fetchCompany = await findCompany();
    res.json(fetchCompany);
  } catch (err) {
    next(err);
  }
}

export async function addCompany(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const formData = req.body;
    const addedCompany = await createCompany(formData);
    res.json(addedCompany);
  } catch (err) {
    next(err);
  }
}
