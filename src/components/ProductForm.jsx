import { useState, useCallback } from "react";
import api from "../services/api";

function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleName = useCallback(({ target }) => setName(target.value));
  const handlePrice = useCallback(({ target }) => setPrice(target.value));
  const handleDescription = useCallback(({ target }) => setDescription(target.value)
  );

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    try {
      const newProductData = {
        name,
        price,
        description,
      };

      await api.post("product/create", newProductData);
      setName("");
      setPrice("");
      setDescription("");
    } catch (error) {
      console.log(error.response);
      const { status } = error.response;
      if (status === 409) {
        global.alert("Product already exists!");
      }
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        required
        value={name}
        onChange={handleName}
      />
      <label htmlFor="price">Points</label>
      <input
        type="text"
        id="price"
        value={price}
        onChange={handlePrice}
      />
      <label htmlFor="description">Description</label>
      <textarea
        type="text"
        id="description"
        value={description}
        onChange={handleDescription}
      />
      <button type="submit">Create Product</button>
    </form>
  );
}

export default ProductForm;
