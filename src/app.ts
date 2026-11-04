import express, { type Express } from "express";
import healthRouter from "./routes/health.ts";

export const app: Express = express();

app.use(healthRouter);
