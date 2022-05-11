import { useNavigate } from "react-router-dom";

function ProductCard({ sale }) {
  const navigate = useNavigate();
  const { totalPrice, saleDate } = sale;
  const handleDetails = () => navigate(`/sale/${sale.id}`)

  return (
    <li>
      <span>{saleDate.split('T')[0]}</span>
      <span>{totalPrice}</span>
      <button type="button" onClick={handleDetails}>
        Details
      </button>
    </li>
  );
}

export default ProductCard;
