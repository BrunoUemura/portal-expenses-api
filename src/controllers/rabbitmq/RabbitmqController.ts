import { CreateUserService } from '../../services/user/CreateUserService';

type IUsersCreate = {
  type: string;
  id: string;
  username: string;
  email: string;
  password?: string;
};

export class RabbitmqController {
  static async handleEvent(message: IUsersCreate) {
    const usersService = new CreateUserService();

    switch (message.type) {
      case 'UserCreation':
        const user = {
          id: message.id,
          username: message.username,
          email: message.email,
        };
        await usersService.execute(user);
        break;

      default:
        console.log(`No action on event`);
        break;
    }
  }
}
