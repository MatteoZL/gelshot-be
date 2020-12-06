import { Router } from 'express';
import * as customer from '../controllers/customer.controller';

const router = Router();

router.route('/')
  .post(customer.createCustomer);

export default router;
 
