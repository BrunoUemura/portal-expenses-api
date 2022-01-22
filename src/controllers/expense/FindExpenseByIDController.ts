import { NextFunction, Request, Response } from 'express';
import { FindExpenseByIDService } from '../../services/expense/FindExpenseByIDService';

export class FindExpenseByIDController {
  static async handle(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const service = new FindExpenseByIDService();

    try {
      const result = await service.execute(id);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
