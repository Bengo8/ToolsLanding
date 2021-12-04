import { React, useState } from 'react';
import './assets/index.css';
import Header from "./components/Header";
import Products from "./components/Products";
import AddProduct from "./components/AddProduct";
import ProductsService from "./services/ProductsService";

const _productsSrvc = new ProductsService();
const ListaCompra = () => {

    const [showAddProduct, setShowAddProduct] = useState(false);
    const [products, setProducts] = useState(_productsSrvc.getProducts())

    // html component functions
    const addProduct = (prod) => {
        const newProd = _productsSrvc.addNewProduct(prod)
        setProducts([...newProd]);
    };

    const deleteProduct = (id) => {
        const newProducstList = _productsSrvc.deleteProduct(id)
        setProducts([...newProducstList]);
    };

    const toggleBought = (id) => {
        const newProducts = _productsSrvc.toggleBought(id);
        setProducts([...newProducts])
    }

    const orderProducts = (order) => {
        let productsOrdered = _productsSrvc.orderProducts(order);

        if (productsOrdered !== null && productsOrdered !== undefined) {
            setProducts([...productsOrdered]);
        }
    }
    //

    return (
        <div className="toolModuleDiv tool-listaCompra">
            <div className="toolModuleDiv tool-listaCompra-container">
                <Header onAdd={() => setShowAddProduct(!showAddProduct)} active={showAddProduct}></Header>
                {showAddProduct && <AddProduct onAdd={addProduct}></AddProduct>}
                {products.length > 0 ? (
                    <Products products={products}
                        onDelete={deleteProduct}
                        onToggle={toggleBought}
                        onOrder={orderProducts}></Products>
                ) : (
                    'No hay poductos para mostrar'
                )}
            </div>
        </div>
    );
}

export default {
    routeProps: {
        path: '/tool/ListaCompra',
        component: ListaCompra,
        type: 'toolModule'
    },
    name: 'ToolListaCompra',
};
