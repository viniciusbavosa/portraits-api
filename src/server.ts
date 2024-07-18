import Fastify, { FastifyReply, FastifyRequest } from 'fastify';
import { envToLogger } from './config/pino-pretty';
import fastifyMultipart from '@fastify/multipart';
import cors from '@fastify/cors';
const app = Fastify({ logger: envToLogger.development ?? true });

app.register(cors, { origin: '*', methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'] });
app.register(fastifyMultipart);

app.get('/', (_req: FastifyRequest, reply: FastifyReply) => {
  return reply.code(200).send('API running');
});

try {
  app.listen({ port: Number(env.APP_PORT)})
    .then(() => {
      console.log('HTTP server running');
    });
} catch (err) {
  app.log.error(err);
  process.exit(1);
}