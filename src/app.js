import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import historyApiFallback from 'connect-history-api-fallback';
import path from 'path';

import customer from "./routes/customer.routes";
import product from "./routes/product.routes";
import order from "./routes/order.routes";

const app = express();

// Settings
app.set('port', process.env.PORT || 5000);

// Middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(fileUpload(({useTempFiles: true})));

// Routes
app.use('/products', product);
app.use('/customer', customer);
app.use('/orders', order);

// Middlewares for Vue
app.use(historyApiFallback());
app.use(express.static(path.join(__dirname, 'public')));

export default app;
