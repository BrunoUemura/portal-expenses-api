import { getCustomRepository } from 'typeorm';

import { ExpenseRepository } from '../../repositories/ExpenseRepository';
import { IExpense } from '../../interfaces/expenseInterface';
import { NotFoundError } from '../../errors/NotFoundError';
import { UserRepository } from '../../repositories/UserRepository';
import { HttpStatusCodes } from '../../enums/HttpStatusCodes';

export class CreateExpenseService {
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

    const expense = this.expenseRepository.create({
      user_id,
      title,
      amount,
      month,
      year,
      category,
    });

    try {
      await this.expenseRepository.save(expense);
    } catch (error) {
      console.log(error);
    }

    return {
      status: HttpStatusCodes.OK,
      message: 'Expense added successfully',
    };
  }
}
