import { Router } from 'express';

import { authMiddleware } from '../middlewares/authMiddleware';
import { FindExpenseByUserIDController } from '../controllers/expense/FindExpenseByUserIDController';
import { FindExpenseByIDController } from '../controllers/expense/FindExpenseByIDController';
import { CreateExpenseController } from '../controllers/expense/CreateExpenseController';
import { UpdateExpenseController } from '../controllers/expense/UpdateExpenseController';
import { DeleteExpenseController } from '../controllers/expense/DeleteExpenseController';

const expense = Router();

expense.get('/expenses/:id', FindExpenseByUserIDController.handle);
expense.get('/expense/:id', FindExpenseByIDController.handle);
expense.post('/expense', authMiddleware, CreateExpenseController.handle);
expense.put('/expense/:id', authMiddleware, UpdateExpenseController.handle);
expense.delete('/expense/:id', authMiddleware, DeleteExpenseController.handle);

export { expense };
