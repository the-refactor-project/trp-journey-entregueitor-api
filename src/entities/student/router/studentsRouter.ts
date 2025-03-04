import { Router } from "express";
import StudentDrizzleRepository from "../repository/StudentDrizzleRepository.js";
import StudentController from "../controller/StudentController.js";
import validateToken from "../../../auth/middlewares/validateToken.js";

const studentsRouter = Router();

const studentRepository = new StudentDrizzleRepository();
const studentController = new StudentController(studentRepository);

studentsRouter.get("/", validateToken, studentController.get);

export default studentsRouter;
