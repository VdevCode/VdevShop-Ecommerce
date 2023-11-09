import React from "react";

const subTitle = "Tiết kiệm trong ngày";
const Title = (
  <h2 className="text-white" style={{ fontSize: 20 }}>
    Tham gia hội thảo miễn phí kéo dài một ngày để{" "}
    <b style={{ color: "#ffdf40", fontWeight: 300 }}>Nâng cao</b>{" "}
    <span>Thành thạo</span>
  </h2>
);

const des = "Ưu đãi thời gian có hạn. Nhanh lên!";

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
              <h4>Đăng ký ngay</h4>
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
