import { FastifyInstance } from "fastify";
import { signInController } from "../../controllers/signIn/signIn-controllers";

export async function signIn(app: FastifyInstance) {
  app.post('/signin', signInController);
}