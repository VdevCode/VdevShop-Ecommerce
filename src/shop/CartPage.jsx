import React, { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [voucher, setVoucher] = useState("");
  const [usedVouchers, setUsedVouchers] = useState([]);
  const [orderTotal, setOrderTotal] = useState(0);
  const [provinces, setProvinces] = useState([]);
  // const [district, setDistrict] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districtsByProvince, setDistrictsByProvince] = useState([]);
  const [selectedWard, setSelectedWard] = useState("");
  const [wardsByDistrict, setWardsByDistrict] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
    localStorage.setItem("cart", JSON.stringify(storedCartItems));
  }, []);

  useEffect(() => {
    fetch("https://vapi.vnappmob.com/api/province/")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch(() => {
        console.error("Lỗi fetch api provinces:");
      });
  }, []);


  useEffect(() => {
    if (selectedProvince) {
      fetch(
        `https://vapi.vnappmob.com/api/province/district/${selectedProvince}`
      )
        .then((res) => res.json())
        .then((data) => setDistrictsByProvince(data))
        .catch(() => {
          console.error("Lỗi fetch api disctrict:");
        });
    }
  }, [selectedProvince]);


  useEffect(() => {
    if (selectedProvince && selectedDistrict) {
      fetch(`https://vapi.vnappmob.com/api/province/ward/${selectedDistrict}`)
        .then((res) => res.json())
        .then((data) => setWardsByDistrict(data))
        .catch(() => {
          console.error("Lỗi fetch api ward:");
        });
    }
  }, [selectedProvince, selectedDistrict]);

  const handleProvincesChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedProvince(selectedValue);
    setSelectedDistrict(""); // Reset selected district when province changes

    // Fetch districts by province ID
    fetch(`https://vapi.vnappmob.com/api/province/district/${selectedValue}`)
      .then((res) => res.json())
      .then((data) => setDistrictsByProvince(data))
      .catch(() => {
        console.error("Lỗi fetch api disctrict:");
      });
  };

  const handleDistrictChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDistrict(selectedValue);
    setSelectedWard(""); // Reset selected ward when district changes

    // Fetch wards by district ID
    fetch(`https://vapi.vnappmob.com/api/province/ward/${selectedValue}`)
      .then((res) => res.json())
      .then((data) => setWardsByDistrict(data))
      .catch(() => {
        console.error("Lỗi fetch api ward:");
      });
  };

  const handleWardChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedWard(selectedValue);
  };
  // const handleVoucherChange = (e) => {
  //   setVoucher(e.target.value);
  // };

  const handleVoucherSubmit = (e) => {
    e.preventDefault();

    if (usedVouchers.includes(voucher)) {
      alert("Bạn đã nhập voucher này rồi!");
      return;
    }

    let discountPercent = 0;
    let discountAmount = 0;

    switch (voucher) {
      case "halloween":
        discountPercent = 50;
        break;
      case "christmas":
        discountPercent = 30;
        break;
      case "newyear":
        discountPercent = 50;
        break;
      case "vdevshop":
        discountPercent = 20;
        break;
      case "myphamsale":
        discountPercent = 30;
        break;
      default:
        alert("Voucher không hợp lệ");
        return;
    }

    discountAmount = (cartSubTitle() * discountPercent) / 100;

    alert(`Nhập thành công, giá được giảm ${discountPercent}%`);
    setUsedVouchers([...usedVouchers, voucher]);

    const updatedOrderTotal = cartSubTitle() - discountAmount;
    setOrderTotal(updatedOrderTotal.toFixed(3));
  };

  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  const cartSubTitle = () => {
    return cartItems.reduce(
      (total, item) => total + calculateTotalPrice(item),
      0
    );
  };

  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    updateLocalStorage([...cartItems]);
  };

  const handleDescreate = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);
      updateLocalStorage([...cartItems]);
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
                            <img src={item.img} alt={item.name} />
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
                          <img src={delImgUrl} alt="Delete" />
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
                    value={voucher}
                    onChange={(e) => {
                      setVoucher(e.target.value);
                    }}
                  />
                  <button
                    className=""
                    style={{
                      width: "100%",
                      fontSize: "1rem",
                      backgroundColor: "#f16126",
                      color: "white",
                      padding: "4px 10px",
                      border: "none",
                    }}
                    type="submit"
                    onClick={handleVoucherSubmit}
                  >
                    Áp dụng
                  </button>
                </form>
                <form className="cart-checkout align-items-center">
                  <input
                    className=""
                    type="submit"
                    value="Thanh toán ship code"
                  />
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
                        <select
                          className=""
                          onChange={handleProvincesChange}
                          value={selectedProvince}
                        >
                          {Array.isArray(provinces.results) &&
                            provinces.results.map((item) => (
                              <option
                                key={item.province_id}
                                value={item.province_id}
                              >
                                {item.province_name}
                              </option>
                            ))}
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shiping-select">
                        <select
                          className=""
                          onChange={handleDistrictChange}
                          value={selectedDistrict}
                        >
                          {Array.isArray(districtsByProvince.results) &&
                            districtsByProvince.results.map((item) => (
                              <option
                                key={item.district_id}
                                value={item.district_id}
                              >
                                {item.district_name}
                              </option>
                            ))}
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shiping-select">
                        <select
                          className=""
                          onChange={handleWardChange}
                          value={selectedWard}
                        >
                          {Array.isArray(wardsByDistrict.results) &&
                            wardsByDistrict.results.map((item) => (
                              <option key={item.ward_id} value={item.ward_id}>
                                {item.ward_name}
                              </option>
                            ))}
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <input
                        type="text"
                        name="PostalCode"
                        placeholder="Mã bưu điện"
                        className="cart-page-input-text"
                      />
                      <button className="btn" type="submit">
                        Cập nhật địa chỉ
                      </button>
                    </div>
                  </div>

                  {/* right */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Tổng chi phí</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Tổng thanh toán</span>
                          <span className="pull-right">
                            {cartSubTitle()}.000VNĐ
                          </span>
                        </li>
                        <li>
                          <span className="pull-left">Chi phí vận chuyển</span>
                          <span className="pull-right">Miễn phí</span>
                        </li>
                        <li>
                          <span className="pull-left">Thành tiền</span>
                          <span className="pull-right">{orderTotal}VNĐ</span>
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
