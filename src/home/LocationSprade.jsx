import React from "react";
import { Link } from "react-router-dom";

const title = "Hơn 60.000 khách hàng";

const desc =
  "Mua sản phẩm trên bất kỳ thiết bị nào của bạn bằng ứng dụng của chúng tôi và tận hưởng thời gian theo những gì bạn muốn. Chỉ cần tải xuống và cài đặt và bắt đầu mua sắm";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
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
