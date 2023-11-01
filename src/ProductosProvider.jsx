import { createContext } from "react";

export const ProductoContext = createContext();

export const ProductosProvider = ({children}) => { 

    const productos = [
        {id:1, nombre:"Producto 1"},
        {id:4, nombre:"Producto 4"},
        {id:8, nombre:"Producto 8"},
    ];

    const data = {productos};

    return (
        <ProductoContext.Provider value={data}>
            {children}
        </ProductoContext.Provider>
    );
}
