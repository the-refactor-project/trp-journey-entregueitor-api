import "dotenv/config";
import { asc } from "drizzle-orm";
import { Student } from "../types.js";
import { StudentRepository } from "./types.js";
import { students as studentsTable } from "../schema/students.js";
import { db } from "../../../database/index.js";

class StudentDrizzleRepository implements StudentRepository {
  public async get(): Promise<Student[]> {
    const students: Student[] = await db
      .select()
      .from(studentsTable)
      .orderBy(asc(studentsTable.name), asc(studentsTable.lastName));

    return students;
  }
}

export default StudentDrizzleRepository;
