import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SaleDetailsCard from "./SaleDetailsCard";
import api from "../services/api";
import "../styles/List.scss";

function SaleDetailsList() {
  const [sale, setSale] = useState({ products: [], saleDate: ''});
  const { id } = useParams()
  useEffect(() => {
    const fetchSale = async () => {
      try {
        const { data } = await api.get(`sale/${id}`);
        setSale(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSale();
  }, []);
  
  return (
    <div className = "table">
      <ul>
        <li>
          <span>{sale.saleDate.split('T')[0]}</span>
          <span>Total: {sale.totalPrice}</span>
        </li>
      </ul>
      <h3>Products</h3>
      <ul>
        <li>
          <span>Name</span>
          <span>Quantity</span>
          <span>Points</span>
          <span>Total Points</span>
        </li>
        {sale.products.map((product) => (
          <SaleDetailsCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default SaleDetailsList;
