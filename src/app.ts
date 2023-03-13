import express from "express";
import cors from "cors";
import morgan from "morgan";

import routes from "./routes";
import { notFound, errorHandler } from "./middlewares/errorHandler";
import { startDatabaseConnection } from "./config/db";

const app = express();

startDatabaseConnection();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api", routes);

app.get("/", async (_req, res) => {
  res.json({
    message: "server",
  });
});

app.use(notFound);
app.use(errorHandler);

export default app;
