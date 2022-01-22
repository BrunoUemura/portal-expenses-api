import { NextFunction, Request, Response } from 'express';
import { DeleteExpenseService } from '../../services/expense/DeleteExpenseService';

export class DeleteExpenseController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const service = new DeleteExpenseService();

    try {
      const result = await service.execute(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
