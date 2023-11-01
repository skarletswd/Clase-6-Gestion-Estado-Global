import { useContext } from "react";
import ProductDetail from "./ProductDetail";
import { ProductoContext } from "./ProductosProvider";

function ProductList() {

  const {productos} = useContext(ProductoContext);

    return (
      <>
        <h3>Lista de Productos</h3>
        
        {productos.map((producto) => (
            <ProductDetail key={producto.id} producto={producto}/>
        ))}
      </>
    );
  }
  
  export default ProductList;