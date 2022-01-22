import { getCustomRepository } from 'typeorm';

import { ExpenseRepository } from '../../repositories/ExpenseRepository';

export class FindExpenseByIDService {
  constructor(
    private expenseRepository = getCustomRepository(ExpenseRepository),
  ) {}

  async execute(id: string) {
    return await this.expenseRepository.findOne(id);
  }
}
