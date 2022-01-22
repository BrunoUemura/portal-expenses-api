import { getCustomRepository } from 'typeorm';

import { ExpenseRepository } from '../../repositories/ExpenseRepository';
import { NotFoundError } from '../../errors/NotFoundError';
import { HttpStatusCodes } from '../../enums/HttpStatusCodes';

export class DeleteExpenseService {
  constructor(
    private expenseRepository = getCustomRepository(ExpenseRepository),
  ) {}

  async execute(id: string) {
    const expenseExists = await this.expenseRepository.findOne(id);
    if (!expenseExists) {
      throw new NotFoundError('Expense not found');
    }

    await this.expenseRepository.delete(id);

    return {
      status: HttpStatusCodes.OK,
      message: 'Expense updated successfully',
    };
  }
}
