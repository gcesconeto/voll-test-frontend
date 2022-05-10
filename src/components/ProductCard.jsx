import { useState, useCallback } from "react";

function ProductCard({ product }) {
  const { name, price, description } = product;

  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    // Needs implementing
  });

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
      <button type="button" onClick={handleSubmit}>
        Add to cart
      </button>
    </li>
  );
}

export default ProductCard;
