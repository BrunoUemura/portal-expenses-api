import express from 'express';
import { expense } from './expense.routes';

export const routes = express();
routes.use('/api/v1', expense);
