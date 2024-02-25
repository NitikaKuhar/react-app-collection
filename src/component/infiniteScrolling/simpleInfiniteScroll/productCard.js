import React from "react";

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className="card">
        <img
          src={data.images[0]}
          className="card-img-top"
          alt="Product Image"
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.description}</p>
          <p className="card-text price">Rs. {data.price}</p>
          <a href="#">Add to Cart</a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;