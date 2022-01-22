import { createConnection } from 'typeorm';
import { DatabaseConnectionError } from '../errors/DatabaseConnectionError';
import { rabbitmqConsumer } from '../middlewares/rabbitmqConsumer';

(async () => {
  let retries = 5;

  while (retries) {
    try {
      await createConnection();
      await rabbitmqConsumer();
      console.log('Successfully connected to database');
      break;
    } catch (error) {
      console.log(`Database connect retries left: ${retries}`);
      retries -= 1;
      await new Promise(res => setTimeout(res, 10000));
    }
  }

  if (retries === 0) {
    throw new DatabaseConnectionError();
  }
})();
