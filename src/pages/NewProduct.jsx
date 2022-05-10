import ProductForm from "../components/ProductForm";
import AdminHeader from "../components/AdminHeader";

function NewProduct() {
  return (
    <main>
      <AdminHeader title="Register new product" />
      <ProductForm />
    </main>
  );
}

export default NewProduct;
