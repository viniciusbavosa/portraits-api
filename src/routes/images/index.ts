import { FastifyInstance } from "fastify";
import { createImageBuffer } from "../../controllers";
import authMiddleware from "../../middlewares/auth";

async function images(app: FastifyInstance) {
   app.post('/images', { preHandler: [authMiddleware]}, createImageBuffer);
}

export {
  images,
}