import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  link: z.string().url("Invalid URL"),
  email: z.string().email("Invalid email"),
  prority: z.enum(["NORMAL", "MEDIUM", "HIGH"]).default("NORMAL"),
});

// extracting the type
export type FormSchema = z.infer<typeof formSchema>;
