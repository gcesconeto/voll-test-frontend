import { useState, useEffect } from "react";
import SaleCard from "./SaleCard";
import api from "../services/api";
import "../styles/List.scss";

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
    <section className="table">
      <ul>
        <li>
          <span>Order Date</span>
          <span>Total Points</span>
        </li>
        {saleList.map((sale) => (
          <SaleCard key={sale.id} sale={sale} />
          ))}
      </ul>
    </section>
  );
}

export default UserList;
