import { NextFunction, Request, Response } from 'express';
import { FindExpenseByUserIDService } from '../../services/expense/FindExpenseByUserIDService';

export class FindExpenseByUserIDController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const service = new FindExpenseByUserIDService();

    try {
      const result = await service.execute(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
