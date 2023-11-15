import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo1.jpg";
import { AuthContext } from "../context/AuthProvider";
import { Modal } from "react-bootstrap"; // Import Modal from react-bootstrap


const NavItems = () => {
  const { user, logout} = useContext(AuthContext);
  const [menuToggle, setMenuToggle] = React.useState(false);
  const [socialToggle, setSocialToggle] = React.useState(false);
  const [headerFixed, setHeaderFixed] = React.useState(false);
  const [showModal, setShowModal] = useState(false);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  const handleClick = () => {
    setMenuToggle(!menuToggle);
    setTimeout(() => {
      setMenuToggle(false);
    }, 3000);
  };

  const handleModalShow = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header-top */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area justify-content-between">
            {user ? (
              <>
                <button
                  className="btn-login"
                  style={{
                    background: "red",
                    padding: "4px 8px",
                    color: "white",
                  }}
                  onClick={logout}
                >
                  Đăng xuất
                </button>
                {/* Hiển thị thông tin người dùng */}
                {user.email && <span>{user.email}</span>}
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className=" me-3"
                  style={{
                    background: "#ffdf40",
                    padding: "4px 8px",
                    color: "black",
                  }}
                >
                  <span>Tạo tài khoản</span>
                </Link>
                <Link to="/login">
                  <span>Đăng nhập</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* header-bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper" style={{ padding: 0 }}>
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img style={{ height: "70px" }} src={logo} alt="lab logo" />
                </Link>
              </div>
            </div>
            {/* menu */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`} style={{color: "black", fontWeight:300}}>
                  <li >
                    <Link style={{color: "black", fontWeight:400}} to="/">Trang chủ</Link>
                  </li>
                  <li>
                    <Link style={{color: "black", fontWeight:400}} to="/shop">Sản phẩm</Link>
                  </li>
                  <li>
                    <Link style={{color: "black", fontWeight:400}} to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link style={{color: "black", fontWeight:400}} to="/about">Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link style={{color: "black", fontWeight:400}} to="/contact">Liên hệ</Link>
                  </li>
                </ul>
              </div>

              {/* login va signin */}
              {user && window.innerWidth > 991 ? (
                <>
                  {/* Hiển thị menu đăng nhập */}
                  {
                    user.photoURL ? (
                      <img
                      src={user.photoURL}
                      alt={user.displayName || user.email}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                    ):(
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )
                  }
                </>
              ) : (
                  null
                )}

              {/* menu-toggle */}
              <div
                onClick={handleClick}
                className={`header-bar me-3 d-lg-none ${
                  menuToggle ? "active" : ""
                }`}
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
                {user ? (
                  user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || user.email}
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  ) : (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/8792/8792047.png"
                      style={{
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                      }}
                    />
                  )
                ) : (
                  <i className="icofont-user"></i>
                )}
              </div>
              
              
            </div>
            {/* modal */}
            


          </div>
        </div>
      </div>
      
    </header>
  );
};

export default NavItems;
