import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
    // Di chuyển dòng localStorage.setItem vào trong useEffect
    localStorage.setItem("cart", JSON.stringify(storedCartItems));
  }, []);

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const handleDescreate = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  const handleRemove = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

    setCartItems(updateCart);
    updateLocalStorage(updateCart);
  };

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const cartSubTitle = cartItems.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );

  const orderTotal = cartSubTitle;

  return (
    <div className="" style={{ overflowX: "hidden" }}>
      <PageHeader title="Giỏ hàng của bạn" curPage="Giỏ hàng" />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top" style={{ overflowX: "scroll" }}>
              <table className="" style={{ textAlign: "center" }}>
                <thead>
                  <tr>
                    <th className="cart-product">Sản phẩm</th>
                    <th className="cart-product">Tên</th>
                    <th className="cart-price">Giá tiền</th>
                    <th className="cart-quantity">Số lượng</th>
                    <th className="cart-topprice">Tổng tiền</th>
                    <th className="cart-edit">Chỉnh sửa</th>
                  </tr>
                </thead>
                <tbody className="text-center ">
                  {cartItems.map((item, index) => (
                    <tr key={index} className="" style={{ fontSize: ".8rem" }}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to={`/shop/${item.id}`}>
                            <img src={item.img} />
                          </Link>
                        </div>
                      </td>
                      <td>
                        <div className="p-content">
                          <Link to={`/shop/${item.id}`}>{item.name}</Link>
                        </div>
                      </td>
                      <td className="cart-price">{item.price}.000VNĐ</td>
                      <td className="cart-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDescreate(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cart-toprice">
                        {calculateTotalPrice(item)}.000VNĐ
                      </td>
                      <td className="cart-edit">
                        <a href="#" onClick={() => handleRemove(item)}>
                          <img src={delImgUrl} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    placeholder="Nhập voucher"
                    name="coupon"
                    className="cart-page-input-text"
                    id="coupon"
                  />
                  <input type="submit" value="Áp dụng" />
                </form>
                <form className="cart-checkout align-items-center">
                  <input className="" type="submit" value="Thanh toán ship code"></input>
                  <div>
                    <CheckoutPage />
                  </div>
                </form>
              </div>
              {/* box shopping */}
              <div className="shiping-box">
                <div className="row">
                {/* left */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Nơi vận chuyển</h3>
                      <div className="outline-select">
                        <select className="">
                          <option value="1">Tây Ninh</option>
                          <option value="2">TP.Hồ Chí Minh</option>
                          <option value="1">Hà Nội</option>
                          <option value="2">Bình Dương</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shiping-select">
                        <select className="">
                          <option value="1">Huyện Dương Minh Châu</option>
                          <option value="2">Huyện Hoà Thành</option>
                          <option value="3">Huyện Chà Là</option>
                          <option value="4">Huyện Trảng Bảng</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <input
                        type="text"
                        name="PostalCode"
                        placeholder="Mã bưu điện
"
                        className="cart-page-input-text"
                      />
                      <button className="btn" type="submit">Cập nhật địa chỉ</button>
                    </div>
                  </div>

                  {/* right */}
                  <div className="col-md-6 col-12">
                        <div className="cart-overview">
                            <h3>Tổng chi phí</h3>
                            <ul className="lab-ul">
                                <li>
                                    <span className="pull-left">Tổng thanh toán</span>
                                    <span className="pull-right">{cartSubTitle}.000VNĐ</span>
                                </li>
                                <li>
                                    <span className="pull-left">Chi phí vận chuyển</span>
                                    <span className="pull-right">Miễn phí</span>
                                </li>
                                <li>
                                    <span className="pull-left">Thành tiền</span>
                                    <span className="pull-right">{orderTotal.toFixed(3)}VNĐ</span>
                                </li>
                            </ul>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
