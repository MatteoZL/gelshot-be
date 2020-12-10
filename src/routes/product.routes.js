import { Router } from 'express';
import * as product from '../controllers/product.controller';

const router = Router();

router.route('/')
  .get(product.allProducts)
  .post(product.createProduct);

router.route('/:typeId')
  .get(product.productsByTypeOrId)
  .put(product.updateProduct)
  .delete(product.deleteProduct);

router.route('/:type/:drink')
  .get(product.productsByTypeDrink);

export default router;
