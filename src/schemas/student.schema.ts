import { z } from "zod";

export const studentPersonalDetail = z.object({
  name: z.string().trim().min(1),
  address: z.string().trim().min(1),
  phoneNumber: z.string().trim().min(1),
  profilePhoto: z.string().trim(),
  collegeId: z.string().trim().min(1),
  bio: z.string().trim(),
});

export const studentAcademicDetail = z.object({
  tenth: z.object({
    schoolName: z.string().trim().min(1),
    schoolAddress: z.string().trim().min(1),
    grade: z.string().trim().min(1),
    passingYear: z.date(),
  }),
  twelth: z.object({
    schoolName: z.string().trim().min(1),
    schoolAddress: z.string().trim().min(1),
    grade: z.string().trim().min(1),
    passingYear: z.date(),
  }),
  bachelors: z.object({
    collegeName: z.string().trim().min(1),
    collegeAddress: z.string().trim().min(1),
    grade: z.string().trim().min(1),
    passingYear: z.date(),
    activeBacklogs: z.number(),
    totalBacklogs: z.number(),
  }),
  masters: z.object({
    collegeName: z.string().trim(),
    collegeAddress: z.string().trim(),
    grade: z.string().trim(),
    passingYear: z.date(),
    activeBacklogs: z.string().trim(),
    totalBacklogs: z.string().trim(),
  }),
});

export const studentProfessionalDetail = z.object({
  resume: z.string().trim(),
  internships: z.array(
    z.object({
      company: z.string().trim(),
      startDuration: z.date(),
      endDurations: z.date(),
      role: z.string().trim(),
      summary: z.string().trim(),
    })
  ),
  skills: z.array(z.string().trim()),
  projects: z.array(
    z.object({
      projectName: z.string().trim(),
      startDuration: z.date(),
      endDurations: z.date(),
      summary: z.string().trim(),
    })
  ),
  coursesOrAchievement: z.array(
    z.object({
      title: z.string().trim(),
      summary: z.string().trim(),
      certificate: z.string().trim(),
    })
  ),
  links: z.array(z.string().trim()),
});

export const studentCoCurricularDetail = z.array(
  z.object({
    title: z.string().trim(),
    summary: z.string().trim(),
    certificate: z.string().trim(),
  })
);

export type studentPersonalDetail = z.infer<typeof studentPersonalDetail>;
export type studentAcademicDetail = z.infer<typeof studentAcademicDetail>;
export type studentProfessionalDetail = z.infer<
  typeof studentProfessionalDetail
>;
export type studentCoCurricularDetail = z.infer<
  typeof studentCoCurricularDetail
>;
