import ProductsServices from "../services/productService";
import Product from '../models/product';

const productServices = new ProductsServices(Product)

export const getAllProducts = async (req, res) => {
    try {
        const products = await productServices.getAllProducts();
        if (products) {
            res.status(200).send(products);
        } else {
            res.send('No products found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const getProductById = async (req,res) => {
    try {
        const product = await productServices.getProductById(req.params.id);
        if (product) {
            res.status(200).send(product);
        } else {
            res.send('No product found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const updateProductById = async (req,res) => {
    const { body, params } = req;

    try {
        const product = await productServices.updateProduct(params.id, body);
        if (product) {
            res.status(200).send(product);
        } else {
            res.send('No product found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}

export const addProduct = async (req,res) => {
    const createdProduct = await productServices.addProduct(req.body);
    res.status(200).send(createdProduct);
}

export const deleteProductById = async (req,res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await productServices.deleteProduct(id);
        if (deletedProduct) {
            res.status(200).send(deletedProduct);
        } else {
            res.send('No product found.')
        }
    } catch (error) {
        res.status(500).send('There has been an error:', error)
    }
}
