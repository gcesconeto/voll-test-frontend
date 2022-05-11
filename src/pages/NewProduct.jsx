import ProductForm from "../components/ProductForm";
import Header from "../components/Header";
import "../styles/CreateProduct.scss"

function NewProduct() {
  return (
    <main className="create-product-page">
      <Header title="Create Product" />
      <ProductForm />
    </main>
  );
}

export default NewProduct;
