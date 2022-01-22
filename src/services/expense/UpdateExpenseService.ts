import { getCustomRepository } from 'typeorm';

import { ExpenseRepository } from '../../repositories/ExpenseRepository';
import { UserRepository } from '../../repositories/UserRepository';
import { IExpense } from '../../interfaces/expenseInterface';
import { NotFoundError } from '../../errors/NotFoundError';
import { HttpStatusCodes } from '../../enums/HttpStatusCodes';

export class UpdateExpenseService {
  constructor(
    private expenseRepository = getCustomRepository(ExpenseRepository),
    private userRepository = getCustomRepository(UserRepository),
  ) {}

  async execute({ user_id, title, amount, month, year, category }: IExpense) {
    const userExists = await this.userRepository.findOne({
      where: { id: user_id },
    });
    if (!userExists) {
      throw new NotFoundError('User not found');
    }

    await this.expenseRepository.update(
      { user_id },
      { title, amount, month, year, category },
    );

    return {
      status: HttpStatusCodes.OK,
      message: 'Expense updated successfully',
    };
  }
}
