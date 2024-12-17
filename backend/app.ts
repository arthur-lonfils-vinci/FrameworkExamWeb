/*
This file needs to be updated for the need of the exam (if needed, else remove it).
*/

import express, { ErrorRequestHandler } from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import authsRouter from "./routes/auths";
//add required routes for the exam


const app = express();

const corsOptions = {
  origin: [/^http:\/\/localhost(:[0-9]+)?$/, "http://amazing.you.com"],
  credentials: true,
  "Content-Type": "application/json"
};

app.use(cors(corsOptions));

app.use((_req, _res, next) => {
  console.log(
    "Time:",
    new Date().toLocaleString("fr-FR", { timeZone: "Europe/Brussels" })
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", usersRouter);
app.use("/auths", authsRouter);
//add required routes for the exam


const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  console.error(err.stack);
  return res.status(500).send("Something broke!");
};

app.use(errorHandler);
export default app;
