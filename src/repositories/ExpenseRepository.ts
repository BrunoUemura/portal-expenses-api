import { EntityRepository, Repository } from 'typeorm';
import { Expense } from '../entities/Expense';

@EntityRepository(Expense)
export class ExpenseRepository extends Repository<Expense> {}
