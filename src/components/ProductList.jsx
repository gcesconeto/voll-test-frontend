import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import api from "../services/api";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get("product/list");
        setProductList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (productId, name, quantity, price) => {
    setCartList((prevCart) => {
      const duplicate = prevCart.find((item) => item.productId === productId)
      if (!duplicate) return [...prevCart, { productId, name, quantity, price }]
      const newCart = prevCart.filter((item) => item.productId !== productId);
      return [...newCart, { productId, name, quantity: quantity + duplicate.quantity, price }]
    });
  }
  
  const removeFromCart = (productId) => {
    setCartList((prevCart) => prevCart.filter((item) => item.productId !== productId));
  }

  return (
    <div>
      <ul>
        {productList.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
      </ul>
      {cartList.length === 0 ? null : <Cart removeFromCart={removeFromCart} cartList={cartList} />}
    </div>
  );
}

export default ProductList;
