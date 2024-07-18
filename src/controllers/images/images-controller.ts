import { FastifyRequest, FastifyReply } from "fastify";

import fs from 'node:fs';
import util from 'node:util';
import path from "node:path";
import { pipeline, PipelineSource } from "node:stream";
const pump = util.promisify(pipeline);

import jwt from 'jsonwebtoken';

import { env } from "../../validators";
import { bearerTokenSchema } from "../../validators";

export async function createImageBuffer(req: FastifyRequest, reply: FastifyReply) {
  try {
    const { authorization } = req.headers;
    const bearerToken = bearerTokenSchema.parse(authorization?.replace('Bearer ', ''));
    const auth = jwt.verify(bearerToken, env.APP_SECRET as string);

    if (!auth) {
      return reply
        .status(401)
        .send({
          error: true,
          message: 'Não autorizado'
        });
    };
  } catch (err) {
    reply.status(500).send('Algo deu errado ao autenticar: ' + err);
  };

  try {
    const data = await req.file();
  
    const uploadPath = path.join('D:/Projetos/Portraits/public/assets/MyPictures', data?.filename as string);
    await pump(data?.file as PipelineSource<any>, fs.createWriteStream(uploadPath));

    return reply.status(202).send({ error: false, message: 'Success' });

  } catch (err) {
    reply.status(500).send('Algo deu errado com o arquivo: ' + err);
  };
    
}