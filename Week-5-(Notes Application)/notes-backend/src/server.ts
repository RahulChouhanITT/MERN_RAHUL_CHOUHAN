import express, { type Application } from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { databaseConnectionManager } from './configuration/databaseConnection.js';
import authenticationRouter from "./routes/authenticationRoutes.js";
import noteRouter from './routes/noteRoutes.js';
import { globalErrorHandler } from './middleware/globalErrorMiddleware.js';
import cors from "cors";

dotenv.config();

const application: Application = express();

application.use(express.json());
application.use(cookieParser());
application.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

application.use("/api/authentication", authenticationRouter);
application.use("/api/notes", noteRouter);
application.use(globalErrorHandler);

const startServer = async (): Promise<void> => {
  await databaseConnectionManager.establishDatabaseConnection();

  const PORT = process.env.APPLICATION_PORT || 5000;
  

  application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();


