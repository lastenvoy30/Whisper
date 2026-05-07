import {z} from 'zod';

export const verifySchema = z.object({
  email: z.email('Please enter a valid email address'),
  verifyCode: z.string().length(6, 'Verification code must be exactly 6 characters long'),
});
