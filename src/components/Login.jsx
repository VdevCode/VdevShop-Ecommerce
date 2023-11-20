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
  const [errorMessege, setErrorMessege] = React.useState("");
  const { signUpWithGmail, login , signUpWithFacebook,signUpWithGithub , signInWithTwitter} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(password);
    login(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      alert("Đăng nhập thành công");
      navigate(from, { replace: true });
    }).catch((error) => {
        const errorMsg = error.message
        setErrorMessege("Sai email hoặc mật khẩu rồi, hoặc bạn chưa tạo tài khoản.");
    })
  };
  const handleRegister = () => {
          console.log("login gmail")
      signUpWithGmail().then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      }).catch((error) => {
        const errorMsg = error.message
        setErrorMessege(errorMsg);
      })
  }


  const handleFacebook = () => {
        console.log("login facebook")
        signUpWithFacebook().then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      }).catch((error) => {
        const errorMsg = error.message
        setErrorMessege(errorMsg);
        
      })
  }


  const handleGithub = () => {
        console.log("login github")
        signUpWithGithub().then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      }).catch((error) => {
        const errorMsg = error.message
        setErrorMessege(errorMsg);
      })  
    }


    const handleApple = () => {
        console.log("login twitter")
        signInWithTwitter().then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      }).catch((error) => {
        const errorMsg = error.message
        setErrorMessege(errorMsg);
      })  
    }

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
                Nếu bạn chưa có tài khoản?
                <Link to="/signup" className="register">
                  Đăng ký ngay
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
                  <li>
                  <button className="github" onClick={handleFacebook} style={{background:"blue",}}>
                 <i className="icofont-facebook"></i>
                  </button>
                </li>
                 <li>
                  <button className="github" onClick={handleGithub} style={{background:"black",}}>
                  <i className="icofont-github"></i>
                  </button>
                </li>
                <li>
                  <button className="github" onClick={handleApple} style={{background:"#00a6ff",}}>
                  <i className="icofont-twitter"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
