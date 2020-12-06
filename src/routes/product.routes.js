import { Router } from 'express';
import * as product from '../controllers/product.controller';

const router = Router();

router.route('/')
  .get(product.allProducts)
  .post(product.productById);

router.route('/:type')
  .get(product.productsByType)

router.route('/:type/:drink')
  .get(product.productsByTypeDrink);

export default router;
