import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CartCard from "./CartCard";
import api from "../services/api";

function Cart({cartList, removeFromCart}) {
  const navigate = useNavigate();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartList.reduce((sum, product) => sum + (product.price * product.quantity), 0))
  }, [cartList]);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const newSale = {
        totalPrice: total,
        products: cartList,
      };
      const { newSaleId } = await api.post("sale/create", newSale);
      navigate(`/sale/${newSaleId}`);
    } catch (error) {
      console.log(error.response);
      }
  });
  
  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {cartList.map((product) => (
          <CartCard key={product.productId} product={product} removeFromCart={removeFromCart} />
          ))}
      </ul>
      <button type="button" onClick={handleSubmit}>
        Place order
      </button>
    </div>
  );
}

export default Cart;
