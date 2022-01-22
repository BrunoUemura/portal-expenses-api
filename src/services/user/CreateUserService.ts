import { UserRepository } from '../../repositories/UserRepository';
import { BadRequestError } from '../../errors/BadRequestError';
import { HttpStatusCodes } from '../../enums/HttpStatusCodes';
import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../../entities/User';

type IUsersCreate = {
  id: string;
  username: string;
  email: string;
};

export class CreateUserService {
  constructor(private userRepository = getCustomRepository(UserRepository)) {}

  async execute({ id, username, email }: IUsersCreate) {
    const userExist = await this.userRepository.findOne({ where: { email } });

    if (userExist) {
      throw new BadRequestError('User already registered');
    }

    const user = this.userRepository.create({
      id,
      username,
      email,
    });

    await this.userRepository.save(user);

    return {
      status: HttpStatusCodes.CREATED,
      message: 'User created successfully',
    };
  }
}
