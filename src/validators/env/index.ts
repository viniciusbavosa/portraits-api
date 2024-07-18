import { z } from "zod";
import 'dotenv/config';

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
require('dotenv').config({ path: envFile });

const errorMessage = 'Caracteres não informados';

const envSchema = z.object({
  APP_PORT: z.string().min(1, ).transform(port => Number(port)),
  APP_SECRET: z.string().min(1, errorMessage),
  URL_DEV: z.string().min(1, errorMessage)
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error('Ocorreu algum erro relacionado a variáveis de ambiente.', _env.error.format());
  throw new Error('Variáveis de ambiente inválidas.');
}

export const env = _env.data;
