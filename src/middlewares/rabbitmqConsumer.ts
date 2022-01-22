import RabbitmqServer from '../config/RabbitmqServer';
import { RabbitmqController } from '../controllers/rabbitmq/RabbitmqController';

export const rabbitmqConsumer = async () => {
  const server = new RabbitmqServer(process.env.RABBITMQ_URL);
  await server.start();
  await server.consume('user', async message => {
    const object = JSON.parse(message.content.toString());
    await RabbitmqController.handleEvent(object);
  });
};
