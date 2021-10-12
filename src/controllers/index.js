import { Router } from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from './products'
import { getAllCarts, createCart, getCartById, deleteCart, addProductToCart, deleteProductFromCart, getProductsFromCart } from "./cart";

const router = Router()

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', addProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

router.get('/cart', getAllCarts);
router.get('/cart/:id', getCartById);
router.get('/cart/:id/products/', getProductsFromCart)
router.post('/cart/:id/products/:product_id', addProductToCart);
router.post('/cart', createCart);
router.delete('/cart/:id', deleteCart);
router.delete('/cart/:id/products/:product_id', deleteProductFromCart);

export default router