import React from "react";
import { Link } from "react-router-dom";
import "../responsive/responsive.css";

const ProductDisplay = ({ item }) => {
  const {
    name,
    id,
    img,
    price,
    seller,
    ratingsCount,
    quantity,
    des,
    category,
  } = item;
  const [reQuantify, setReQuantity] = React.useState(quantity);
  const [coupon, setCoupon] = React.useState("");
  const [size, setSize] = React.useState("Chọn size");
  const [color, setColor] = React.useState("Chọn color");
  const [combo, setCombo] = React.useState("Món ăn vặt");

  const min = 0;
  const max = 3000;

  const randomStars = Math.floor(Math.random() * 5) + 1;
  const stars = Array.from({ length: randomStars }, (_, index) => (
    <i key={index} className="icofont-star"></i>
  ));

  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleColor = (e) => {
    setColor(e.target.value);
  };

  const handleCombo = (e) => {
    setCombo(e.target.value);
  }

  const handleDecrease = () => {
    if (reQuantify > 1) {
      setReQuantity(reQuantify - 1);
    } else if (reQuantify <= 1) {
      setReQuantity(0);
      alert("Số lượng thấp quá rồi bạn.");
    }
  };

  const handleIncrease = () => {
    setReQuantity(reQuantify + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đã thêm sản phẩm vào giỏ.");
    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      seller: seller,
      quantity: reQuantify,
      size: size,
      color: color,
      coupon: coupon,
      combo: combo
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity += reQuantify;
    } else {
      existingCart.push(product);
    }
    localStorage.setItem("cart", JSON.stringify(existingCart));
    setReQuantity(1);
    setCoupon("");
    setSize("Chọn size");
    setColor("Chọn color");
  };

  return (
    <div>
      <div>
        <h4 className="title">{name}</h4>
        <p className="rating align-items-center d-flex">
          {stars}
          <span>
            {" "}
            {Math.floor(Math.random(ratingsCount) * (max - min + 1)) + min} Đánh
            giá
          </span>
        </p>
        <h4 className="price">{price}.000 VNĐ</h4>
        <h6>Hãng: {seller} </h6>
        <p> {des}</p>
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          {category === "Mỹ phẩm" ||
          category === "Giày" ||
          category == "Quần áo" ||
          category == "Túi sách" ? (
            <>
              {/* size */}
              <div className="select-product size">
                <select
                  className="form-select"
                  value={size}
                  onChange={handleSize}
                >
                  <option value="Chọn size">Chọn size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
                <i className="icofont-rounded-down"></i>
              </div>
              {/* color */}
              <div className="select-product color">
                <select
                  className="form-select"
                  value={color}
                  onChange={handleColor}
                >
                  <option value="Chọn color">Chọn color</option>
                  <option value="Red">Red</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="Black">Black</option>
                  <option value="White">White</option>
                  <option value="Yellow">Yellow</option>
                </select>
                <i className="icofont-rounded-down"></i>
              </div>
            </>
          ) : (
            // Add additional condition for other categories (e.g., "Món ăn vặt")
            <>
              <div className="select-product color">
                <select
                  className="form-select"
                  value={combo}
                  onChange={handleCombo}
                >
                  <option value="Chọn color">Chọn combo</option>
                  <option value="Red">x2</option>
                  <option value="Green">x3</option>
                </select>
                <i className="icofont-rounded-down"></i>
              </div>
            </>
          )}

          {/* cart */}
          <div className="d-flex align-items-center justify-content-between">
            <p className="me-3">Số lượng</p>
            <div className="cart-plus-minus">
              <div className="dec qtybutton" onClick={handleDecrease}>
                -
              </div>
              <input
                type="text"
                className="cart-plus-minus-box"
                name="qtybutton"
                id="qtybutton"
                value={reQuantify}
                onChange={(e) => setReQuantity(e.target.value)}
              />
              <div className="inc qtybutton" onClick={handleIncrease}>
                +
              </div>
            </div>
          </div>

          {/* discount code */}
          {/* <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Nhập mã giảm giá"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
                <input type="submit" value="Áp dụng" />
          </div> */}

          {/* btn section */}
          <button className="lab-btn text-white" type="submit">
            Thêm vào giỏ hàng
          </button>
          <Link to={`/cart-page`} className="lab-btn bg-primary">
            <span>Xem giỏ hàng</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
