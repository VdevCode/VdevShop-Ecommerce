import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx"

const ProductCard = ({ GridList, products }) => {
  const ProductList = products;
  if (!ProductList) return null;

  return (
    <div
      className={`shop-product-wrap row justify-content-center ${
        GridList ? "grid" : "list"
      }`}
    >
      {ProductList.map((item, index) => (
        <div className={`col-lg-4 col-md-6 col-12 g-4`} key={index}>
          <div className="product-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={item.img} alt={`Product ${index}`} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                    <i className="icofont-eye"></i>
                 
                </Link>
                <a href="#">
                        <i className="icofont-heart"></i>
                    </a>
                <Link to="/cart-page">
                <i className="icofont-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
                <h5>
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                </h5>
                <p className="productRating">
                    <Rating />
                </p>
                <h6 className="text-success">{`${item.price}.000 VND`}</h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div className="pro-thumb">
                <img src={item.img} alt={`Product ${index}`} />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                    <i className="icofont-eye"></i>
                 
                </Link>
                <a href="#">
                        <i className="icofont-heart"></i>
                    </a>
                <Link to="/cart-page">
                <i className="icofont-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
                <h5 className="">
                    <Link to={`/shop/${item.id}`}>{item.name}</Link>
                </h5>
                <p className="productRating">
                    <Rating />
                </p>
                <h6 className="text-success">{`${item.price}.000 VNĐ`}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
