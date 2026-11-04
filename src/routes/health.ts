import type { Request, Response } from "express";
import express from "express";

const healthRouter = express.Router();

healthRouter.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

export default healthRouter;
