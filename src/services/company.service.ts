import { Companies } from "../models/company.model";

export function findCompany() {
  return Companies.find().populate("candidates");
}

export function createCompany(data: any) {
  return Companies.create(data);
}
