function ProductCard({ product, removeFromCart }) {
  const { productId, name, price, quantity } = product;
  const handleRemove = () => removeFromCart(productId);

  return (
    <li>
      <span>{name}</span>
      <span>{price}</span>
      <span>{quantity}</span>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
    </li>
  );
}

export default ProductCard;
