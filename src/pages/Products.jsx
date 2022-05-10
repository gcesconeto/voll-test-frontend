import ProductList from "../components/ProductList";
import UserHeader from "../components/UserHeader";

function Products() {
  return (
    <main>
      <UserHeader title="Products" />
      <ProductList />
    </main>
  );
}

export default Products;
