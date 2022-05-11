import ProductList from "../components/ProductList";
import Header from "../components/Header";
import "../styles/Page.scss";

function Products() {
  return (
    <main className="page">
      <Header title="Products" />
      <ProductList />
    </main>
  );
}

export default Products;
