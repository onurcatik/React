import React from "react";
import ProductList from "./ProductList";
import productsData from "./productsData";

const ProductListContainer = () => {
  return (
    <div>
      <h1 className="ProductShowcase">Product Showcase</h1>
      <ProductList products={productsData} />
    </div>
  );
};

export default ProductListContainer;
