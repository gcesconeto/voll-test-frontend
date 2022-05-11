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
      await api.post("sale/create", newSale);
      navigate("/sales");
    } catch (error) {
      console.log(error.response);
      const { status } = error.response;
      if (status === 401) global.alert("Insufficient points!");
      }
  });
  
  return (
    <div>
      <ul>
        <li>
          <span>Cart</span>
          <span>Points</span>
          <span>Quantity</span>
        </li>
        {cartList.map((product) => (
          <CartCard key={product.productId} product={product} removeFromCart={removeFromCart} />
          ))}
        <li>
          <span>Order total:</span>
          <span>{total}</span>
          <span> </span>
          <span>
            <button type="button" onClick={handleSubmit}>
              Place order
            </button>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Cart;
