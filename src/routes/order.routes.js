import { Router } from 'express';
import * as order from '../controllers/order.controller';

const router = Router();

router.route('/')
  .get(order.allOrders)
  .post(order.createOrder);

export default router;
 
