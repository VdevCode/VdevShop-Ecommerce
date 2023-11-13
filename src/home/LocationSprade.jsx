import React from "react";
import { Link } from "react-router-dom";

const title = "Hơn 1.000 khách hàng đã mua sản phẩm";

const desc =
  " mang đến trải nghiệm mua hàng tuyệt vời cho người dùng. Nhanh tay đăng ký ngay thôi.";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
];

const LocationSprade = () => {
  return (
    <div className="clients-section style-2 padding-tb">
      <div className="container">
        <div className="section-header text-center">
          <p>{desc}</p>
          <h2>{title}</h2>
        </div>

        {/* main section */}
        <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((clients, index) => (
              <div key={index} className="client-list">
                <Link to="/sign-up" className="client-content">
                  <span>{clients.text}</span>
                </Link>
                <div className="client-thumb">
                    <img src={clients.imgUrl} alt={clients.imgAlt} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSprade;
