import React, { useState } from "react";

const App = () => {
  const [product, setProduct] = useState({
    product_name: "",
    price: "",
    image: null
  });

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const selectedImage = e.target.files[0];
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: selectedImage
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product:", product);
  };

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Product Name:</label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            value={product.product_name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Product Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default App;
