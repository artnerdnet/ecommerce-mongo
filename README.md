# Proyecto Final Backend

## Pasos para instalar y correr el proyecto en local
1. `git clone git@github.com:artnerdnet/proyecto-final.git`
2. `cd proyecto-final`
3. `yarn`
4. `yarn start`

## API
### Productos
- Obtener todos los productos: `[GET] /api/products/`
- Obtener un producto según el id: `[GET] /api/products/{id}`
- Crear un nuevo producto: `[POST] /api/products/`
  Se debe enviar en el body los siguientes campos: 
  ```
    {
      "name": "Apple iPhone SE (64 GB) - en Negro",
      "description": "El iPhone SE une un chip superpotente, el tamaño más popular y nuestro precio más asequible. Justo lo que estabas esperando.",
      "picture" : "https://m.media-amazon.com/images/I/81nld4NtAkL._AC_SL1500_.jpg",
      "price" : 479.99,
      "code": 1235,
      "stock": 10
    }
  ```
- Actualizar un producto: `[PUT] /api/products/{id}`
  Se debe enviar en el body los siguientes campos:
  ```
    {
      "id": 1,
      "name": "Apple iPhone SE (64 GB) - en Negro",
      "description": "El iPhone SE une un chip superpotente, el tamaño más popular y nuestro precio más asequible. Justo lo que estabas esperando.",
      "picture" : "https://m.media-amazon.com/images/I/81nld4NtAkL._AC_SL1500_.jpg",
      "price" : 479.99,
      "code": 123,
      "stock": 10
    }
  ```
- Eliminar un producto de la lista según el id: `[DELETE] /api/products/{id}`

### Carritos
- Obtener todos los carritos: `[GET] /api/cart/`
- Crear un nuevo carrito: `[POST] /api/cart/`
- Obtener un carrito según el id: `[GET] /api/cart/{id}`
- Eliminar un carrito: `[DELETE] /api/cart/{id}`
- Agregar un producto al carrito: `[PUT] /api/cart/{id}/products/{product_id}`
- Obtener los productos en el carrito: `[PUT] /api/cart/{id}/products/`
- Eliminar un producto del carrito según el id: `[DELETE] /api/cart/{id}/products/{product_id}`
