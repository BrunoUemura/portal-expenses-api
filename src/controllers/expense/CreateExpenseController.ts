import { NextFunction, Request, Response } from 'express';
import { CreateExpenseService } from '../../services/expense/CreateExpenseService';

export class CreateExpenseController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    const { user_id, title, amount, month, year, category } = req.body;
    const service = new CreateExpenseService();

    try {
      const result = await service.execute({
        user_id,
        title,
        amount,
        month,
        year,
        category,
      });
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
