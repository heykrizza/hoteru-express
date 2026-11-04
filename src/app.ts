import express, { type Express } from "express";
import healthRouter from "./routes/health.ts";

const PORT = process.env.PORT || 3000;
export const app: Express = express();

app.use(healthRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
