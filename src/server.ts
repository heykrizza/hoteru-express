import { z } from "zod";
import { app } from "./app.ts";

const PORT = z
  .string()
  .min(1)
  .refine((val) => !Number.isNaN(Number(val)))
  .transform((val) => parseInt(val, 10))
  .safeParse(process.env.PORT);

if (!PORT.success) {
  console.error("Invalid PORT:", PORT.error);
  throw new Error("PORT is not configured correctly");
}

app.listen(PORT.data, () => {
  console.log(`Server is running on http://localhost:${PORT.data}`);
});
