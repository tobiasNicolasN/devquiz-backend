import { z } from "zod";

export const scoreSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .max(30, {
      message: "Max length 30 characters",
    }),
  score: z
    .number({
      required_error: "Score is required",
      invalid_type_error: "Score must be a number",
    })
    .int({ message: "Score must be a integer" })
    .nonnegative({ message: "Score must be a positive number" }),
});
