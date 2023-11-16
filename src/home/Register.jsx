import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Title = (
  <h2 className="text-white" style={{ fontSize: 20 }}>
    1 ngày trải nghiệm tại Vdevshop với những{" "}
    <b style={{ color: "#ffdf40", fontWeight: 300 }}>Sản phẩm</b>{" "}
    <span>chất lượng</span>
  </h2>
);

const des = "Ưu đãi thời gian có hạn. Đăng ký ngay!";

const Register = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s6ihlp6",
        "template_rgp9vfp",
        form.current,
        "slgmIFp_kwyCRpUXB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
        alert("Đăng ký tham gia thành công");
        e.target.reset()
  };

  return (
    <section className="register-section padding-tb pb-0">
      <div className="container">
        <div className="row align-items-center mx-auto justify-content-center g-4 row-cols-1 row-cols-lg-2">
          <div className="col">
            <div className="section-header">
              {/* <span className="subtitle">{subTitle}</span> */}
              <p className="text-white">{Title}</p>
              <p>{des}</p>
            </div>
          </div>
          <div className="col">
            <div className="section-wrapper">
              <h4>Đăng ký tham gia</h4>
              <form className="register-form" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="Tên đăng nhập"
                  name="user_name"
                  className="reg-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  className="reg-input"
                />
                <input
                  type="number"
                  placeholder="Phone"
                  name="user_phone"
                  className="reg-input"
                />
                <button className="lab-btn" type="submit">
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
