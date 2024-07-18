import { z } from 'zod';

export const bearerTokenSchema = z.string().min(1, 'Token inválido');

export const signInBodySchema = z.object({
  password: z.string().min(12, { message: "Credencial inválida" })
});