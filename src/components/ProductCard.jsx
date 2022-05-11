import { useState } from "react";

function ProductCard({ product, addToCart }) {
  const { id, name, price, description } = product;

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAdd = () => {
    addToCart(id, name, quantity, price);
    setQuantity(0);
  }
  return (
    <li>
      <span>{name}</span>
      <span>{price}</span>
      <span>{description}</span>
      <button
        type="button"
        onClick={ decreaseQuantity }
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        type="button"
        onClick={ increaseQuantity }
      >
        +
      </button>
      <button type="button" disabled={quantity === 0}onClick={handleAdd}>
        Add to cart
      </button>
    </li>
  );
}

export default ProductCard;
