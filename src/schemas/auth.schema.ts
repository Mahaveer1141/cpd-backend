import { z } from "zod";

export const Auth = z.object({
  email: z.string().trim().email().min(1),
  password: z.string().trim().min(8),
});

export type Auth = z.infer<typeof Auth>;
