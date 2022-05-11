function SaleDetailsCard({ product }) {
  const { name, price, salesProduct: { quantity } } = product;

  return (
    <li>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{price}</span>
      <span>{price * quantity}</span>
    </li>
  );
}

export default SaleDetailsCard;
