import { Students } from "../models/student.model";

export async function getStudents() {
  const fetchedStudent = await Students.find();
  return fetchedStudent;
}

export async function getOneStudent(data: any) {
  return Students.findOne(data);
}

export async function createStudent(data: any) {
  const student = new Students(data);
  return student.save();
}

export async function updateStudentData(
  userId: string,
  section: string,
  data: any
) {
  const finalUpdateData: any = {};
  finalUpdateData[section] = data;
  return Students.findOneAndUpdate({ _id: userId }, finalUpdateData);
}
