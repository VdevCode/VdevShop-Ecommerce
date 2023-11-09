import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [socialToggle, setSocialToggle] = React.useState(false);
  const [headerFixed, setHeaderFixed] = React.useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header-top */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Tạo tài khoản</span>
            </Link>
            <Link to="/signin">
              <span>Đăng nhập</span>
            </Link>
          </div>
        </div>
      </div>

      {/* header-bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="lab logo" />
                </Link>
              </div>
            </div>
            {/* menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/about">Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to="/contact">Liên hệ</Link>
                  </li>
                </ul>
              </div>

              {/* login va signin */}
              <Link to="/signup" className="lab-btn me-3 d-none d-md-block">
                Tạo tài khoản
              </Link>
              <Link to="/signup" className="d-none d-md-block">
                Đăng nhập
              </Link>

              {/* menu-toggle */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar me-3 d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* socials toggle */}
              <div
                className="ellipsis-bar d-md-none"
                onClick={() => {
                  setSocialToggle(!socialToggle);
                }}
              >
                <i className="icofont-user"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavItems;
