import { z } from 'zod';

export const signInSchema = z.object({
  identifier: z.string().min(3, 'Please enter your email or username'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
});
