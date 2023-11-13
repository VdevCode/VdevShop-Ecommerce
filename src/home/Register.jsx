import React from "react";

const subTitle = "Đăng ký tham gia";
const Title = (
  <h2 className="text-white" style={{ fontSize: 20 }}>
    1 ngày trải nghiệm tại Vdevshop với những{" "}
    <b style={{ color: "#ffdf40", fontWeight: 300 }}>Sản phẩm</b>{" "}
    <span>chất lượng</span>
  </h2>
);

const des = "Ưu đãi thời gian có hạn. Đăng ký ngay!";

const Register = () => {
  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row align-items-center mx-auto justify-content-center g-4 row-cols-1 row-cols-lg-2">
          <div className="col">
            <div className="section-header">
              <span className="subtitle">{subTitle}</span>
              <p className="text-white">{Title}</p>
              <p>{des}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Đăng ký tham gia</h4>
              <form className="register-form">
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  name="name"
                  className="reg-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="reg-input"
                />
                                <input
                  type="number"
                  placeholder="Phone"
                  name="number"
                  className="reg-input"
                />
                <button className="lab-btn" type="submit">Đăng ký</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
