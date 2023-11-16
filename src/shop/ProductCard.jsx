import React from "react";
import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx";
import "../responsive/responsive.css";

const ProductCard = ({ GridList, products }) => {
  const ProductList = products;
  if (!ProductList) return null;

  return (
    <div
      className={`shop-product-wrap row justify-content-center check-res ${
        GridList ? "grid" : "list"
      }`}
    >
      {ProductList.map((item, index) => (
        <div className={`container col-lg-4 col-md-6 col-12 g-4`} key={index}>
          <div className="product-item col">
            <div className="product-thumb">
              <div
                className="pro-thumb"
                style={{
                  height: window.innerWidth <= 568 ? "200px" : "auto",
                }}
              >
                <img 
                className="check-img"
                  src={item.img}
                  alt={`Product ${index}`}
                />
              </div>
              <div className="product-action-link">
                <Link to={`/shop/${item.id}`}>
                  <i className="icofont-eye-open"></i>
                </Link>
                <a href="#">
                  <i className="icofont-heart"></i>
                </a>
                <Link to="/cart-page">
                <i className="icofont-food-cart"></i>
                </Link>
              </div>
            </div>
            <div className="product-content">
              <p>
                <strong><Link style={{ textTransform: 'capitalize'}} className="line-clamp" to={`/shop/${item.id}`}>{item.name}</Link></strong>
              </p>
              <p className="productRating">
                Đánh giá: <Rating />
              </p>
              <h6 className="text-font">{`Giá: ${item.price}.000 VND`}</h6>
            </div>
          </div>
          <div className="product-list-item">
            <div className="product-thumb">
              <div
                className="pro-thumb"
                style={{
                  height: window.innerWidth <= 568 ? "200px" : "auto",
                }}
              >
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
            <div className="product-content text-font">
              <h5 className="">
                <Link style={{ textTransform: 'capitalize'}} to={`/shop/${item.id}`}>{item.name}</Link>
              </h5>
              <p className="productRating">
                Đánh giá: <Rating />
              </p>
              <p className="text-font">{`Giá: ${item.price}.000 VND`}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
