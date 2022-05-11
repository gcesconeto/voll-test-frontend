import SaleList from "../components/SaleList";
import Header from "../components/Header";
import "../styles/Page.scss";

function Sales() {
  return (
    <main className="page">
      <Header title="Orders" />
      <SaleList />
    </main>
  );
}

export default Sales;
