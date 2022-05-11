import SaleDetailsList from "../components/SaleDetailsList";
import Header from "../components/Header";
import "../styles/Page.scss";

function SaleDetails() {
  return (
    <main className="page">
      <Header title="Order Details" />
      <SaleDetailsList />
    </main>
  );
}

export default SaleDetails;
