import { Router } from "express";
import StudentDrizzleRepository from "../repository/StudentDrizzleRepository.js";
import StudentController from "../controller/StudentController.js";

const studentsRouter = Router();

const studentRepository = new StudentDrizzleRepository();
const studentController = new StudentController(studentRepository);

studentsRouter.get("/", studentController.get);

export default studentsRouter;
