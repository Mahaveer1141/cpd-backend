import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  email: String,
  password: String,
  personalDetail: {
    name: String,
    address: String,
    phoneNumber: String,
    profilePhoto: String,
    collegeId: String,
    bio: String,
  },
  academicDetail: {
    tenth: {
      schoolName: String,
      schoolAddress: String,
      grade: String,
      passingYear: Date,
    },
    twelth: {
      schoolName: String,
      schoolAddress: String,
      grade: String,
      passingYear: Date,
    },
    bachelors: {
      collegeName: String,
      collegeAddress: String,
      grade: String,
      passingYear: Date,
      activeBacklogs: Number,
      totalBacklogs: Number,
    },
    masters: {
      collegeName: String,
      collegeAddress: String,
      grade: String,
      passingYear: Date,
      activeBacklogs: Number,
      totalBacklogs: Number,
    },
  },
  professionalDetail: {
    resume: String,
    internships: [
      {
        company: String,
        startDuration: Date,
        endDurations: Date,
        role: String,
        summary: String,
      },
    ],
    skills: [String],
    projects: [
      {
        projectName: String,
        startDuration: Date,
        endDurations: Date,
        summary: String,
      },
    ],
    coursesOrAchievement: [
      {
        title: String,
        summary: String,
        certificate: String,
      },
    ],
    links: [String],
  },
  coCuriculum: [
    {
      title: String,
      summary: String,
      certificate: String,
    },
  ],
  appliedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: "companies" }],
});

export const Students = mongoose.model("students", studentSchema);
