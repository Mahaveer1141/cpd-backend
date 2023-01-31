import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String },
  jobDescription: { type: String },
  locations: [{ type: String }],
  packages: [{ type: String }],
  criteria: {
    field: [{ type: String }],
    branch: [{ type: String }],
    batch: [{ type: String }],
    activeBacklog: { type: String },
    totalBacklog: { type: String },
    grade: { type: String },
  },
  candidates: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
});

export const Companies = mongoose.model("companies", companySchema);
