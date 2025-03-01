import express from "express";
import morgan from "morgan";
import cors from "cors";
import isBackupNeeded from "../database/backup/middleware.js";
import deliveriesRouter from "../entities/delivery/router/deliveriesRouter.js";
import studentsRouter from "../entities/student/router/studentsRouter.js";

const app = express();

app.use(isBackupNeeded);
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.use("/deliveries", deliveriesRouter);
app.use("/students", studentsRouter);

app.use((_req, res) => {
  res.status(404).json({ error: "Endpoint not found" });
});

export default app;
