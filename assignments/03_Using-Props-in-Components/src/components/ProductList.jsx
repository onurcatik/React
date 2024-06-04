import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h2 className="product-title">{product.name}</h2>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
