import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Title = "Đăng ký ";
const subTitle = "Đăng nhập với hình thức mạng xã hội";
const btnText = "Đăng ký";
const Signup = () => {
  const [errorMessege, setErrorMessege] = React.useState("");
  const { signUpWithGmail, login ,createUser} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessege("Mời bạn nhập đúng và đầy đủ các mục nhé.");
      });
}

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    console.log(email);
    const password = form.password.value;
    console.log(password);
    const confirmPassword = form.confirmPassword.value;
    console.log(confirmPassword);
    if (password !== confirmPassword) {
      setErrorMessege("2 mật khẩu méo trùng khớp nhá.");
      return;
    }else{
        createUser(email, password).then((result) => {
        const user = result.user;
        console.log(user);
        alert("Đăng ký thành công");
        navigate(from, { replace: true })
    })
    .catch((error) => {
        const errorMsg = error.message
        setErrorMessege(errorMsg);
    })
}}
  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{Title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Nhập tên"
                  required
                />
              </div>
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
              <div className="form-group">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Nhập lai mật khẩu"
                  required
                />
              </div>

              {/* showing messag  */}
              {errorMessege && (
                <p className="error-message text-danger">{errorMessege}</p>
              )}

              <div className="form-group d-flex align-items-center justify-content-between flex-wrap pt-sm-2">
                <div className="checkgroup">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    required
                  />
                  <label htmlFor="remember">Lưu tài khoản</label>
                </div>
                <Link to="/forgot-password" className="forgot-password">
                  Quên mật khẩu?
                </Link>
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
                Nếu bạn đã có tài khoản?
                <Link to="/login" className="register">
                  Đăng nhập ngay
                </Link>
              </span>
              <span className="or ">
                <span className="">or</span>
              </span>
              <p className="subtitle">{subTitle}</p>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button className="github" onClick={handleRegister}>
                    <i className="icofont-google-plus"></i>
                  </button>
                </li>
                {/* <li>
                  <a href="#"  className="twitter">
                    <i className="icofont-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#"  className="linkedin">
                    <i className="icofont-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#"  className="instagram">
                    <i className="icofont-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#"  className="pinterest">
                    <i className="icofont-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#"   className="google-plus">
                    <i className="icofont-google-plus"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
