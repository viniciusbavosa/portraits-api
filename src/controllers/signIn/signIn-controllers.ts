import { FastifyReply, FastifyRequest } from "fastify";

import { signInBodySchema } from "../../validators";
import { env } from "../../validators";

import jwt from 'jsonwebtoken';

export async function signInController(req: FastifyRequest, reply: FastifyReply) {
  try {

    const { password } = signInBodySchema.parse(req.body);
    const compareUserPassword = (password === env.APP_SECRET);

    if (!compareUserPassword) {
      return reply.status(401).send({ error: true, message: 'Não autorizado' });
    }

    const token = jwt.sign(
      {},
      env.APP_SECRET as string,
      { expiresIn: '2h' }
    );

    return reply.status(200).type('application/json').send({
      error: false,
      data: token
    });

  } catch (err) {
    reply.status(500).send({
      error: true,
      message: 'Algo deu errado: ' + err
    });
  };
}