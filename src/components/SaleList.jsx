import { useState, useEffect } from "react";
import SaleCard from "./SaleCard";
import api from "../services/api";

function UserList() {
  const [saleList, setSaleList] = useState([]);

  useEffect(() => {
    const fetchSales = async () => {
      try {
        const { data } = await api.get("sale/list");
        setSaleList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSales();
  }, []);

  return (
    <ul>
      <li>
        <span>Order Date</span>
        <span>Total Price</span>
      </li>
      {saleList.map((sale) => (
        <SaleCard key={sale.id} sale={sale} />
      ))}
    </ul>
  );
}

export default UserList;
