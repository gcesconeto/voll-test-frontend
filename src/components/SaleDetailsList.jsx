import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import SaleDetailsCard from "./SaleDetailsCard";
import api from "../services/api";

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
    <div>
      <div>Sale Date: {sale.saleDate.split('T')[0]}</div>
      <div>Total: {sale.totalPrice}</div>
      <h3>Products</h3>
      <ul>
        <li>
          <span>Name</span>
          <span>Quantity</span>
          <span>Price</span>
          <span>Total Price</span>
        </li>
        {sale.products.map((product) => (
          <SaleDetailsCard key={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
}

export default SaleDetailsList;
