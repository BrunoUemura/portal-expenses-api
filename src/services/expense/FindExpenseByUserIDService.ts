import { getCustomRepository } from 'typeorm';

import { ExpenseRepository } from '../../repositories/ExpenseRepository';

export class FindExpenseByUserIDService {
  constructor(
    private expenseRepository = getCustomRepository(ExpenseRepository),
  ) {}

  async execute(user_id: string) {
    return await this.expenseRepository.find({ where: { user_id } });
  }
}
