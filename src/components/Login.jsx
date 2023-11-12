import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Title = "Đăng nhập";
const subTitle = "Đăng nhập với hình thức mạng xã hội";
const btnText = "Đăng nhập";

const socialList = [
  { iconName: "icofont-facebook", siteLink: "#", className: "facebook" },
  { iconName: "icofont-twitter", siteLink: "#", className: "twitter" },
  { iconName: "icofont-linkedin", siteLink: "#", className: "linkedin" },
  { iconName: "icofont-instagram", siteLink: "#", className: "instagram" },
  { iconName: "icofont-pinterest", siteLink: "#", className: "pinterest" },
];
const Login = () => {
  const [errorMessega, setErrorMessega] = React.useState("");
  const { signUpWithGmail, login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  };

  return (
    <div className="">
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{Title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Nhập mật khẩu"
                  required
                />
              </div>
              <div className="form-group d-flex align-items-center justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    required
                  />
                  <label htmlFor="remember">Nhớ mật khẩu</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">Quên mật khẩu?</Link>
              </div>
              <div className="form-group">
                <button type="submit" className="d-block lab-btn">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>

            {/* account */}
            <div className="account-bottom">
                <span className="d-block cate pt-10">
                   Nếu bạn chưa có tài khoản? 
                   <Link to="/signup" className="register">
                     Đăng ký ngay
                  </Link>
                </span>
                <span className="or ">
                  <span className="">or</span>
                </span>
                <p className="subtitle">
                  {subTitle}
                </p>
                <ul className="lab-ul social-icons justify-content-center">
                    {
                        socialList.map((val, i) => (
                            <li key={i}>
                                <button className={`${val.className} `}>
                                    <i className={`${val.iconName}`}>{val.text}</i>
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
