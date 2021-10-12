import CartServices from "../services/cartSevices";
import Cart from '../models/cart';

const cartServices = new CartServices(Cart)

export const getAllCarts = async (req, res) => {
    try {
        const carts = await cartServices.getAllCarts();
        if (carts) {
            res.status(200).send(carts);
        } else {
            res.status(200).send('No carts found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const getCartById = async (req,res) => {
    try {
        const cart = await cartServices.getCartById(req.params.id);
        if (cart) {
            res.status(200).send(cart);
        } else {
            res.status(200).send('No cart found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const addProductToCart = async (req,res) => {
    const { id, product_id } = req.params;

    try {
        const updatedCart = await cartServices.addProductsToCart(id, product_id);
        if (updatedCart) {
            res.status(200).send(updatedCart);
        } else {
            res.status(200).send('No product or cart found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const getProductsFromCart = async (req,res) => {
    const { id } = req.params;

    try {
        const cart = await cartServices.getProductsFromCart(id);
        if (cart) {
            res.status(200).send(cart);
        } else {
            res.status(200).send('No product or cart found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const deleteProductFromCart = async (req,res) => {
    const { id, product_id } = req.params;
    
    try {
        const cart = await cartServices.deleteProductFromCart(id, product_id);
        if (cart) {
            res.status(200).send(cart);
        } else {
            res.status(200).send('No product or cart found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const createCart = async (req,res) => {
    const createdCart = await cartServices.createCart();
    res.status(200).send(createdCart);
}

export const deleteCart = async (req,res) => {
    const { id } = req.params;
    try {
        const deletedCart = await cartServices.deleteCart(id);
        if (deletedCart) {
            res.status(200).send(deletedCart);
        } else {
            res.status(200).send('No cart found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}
