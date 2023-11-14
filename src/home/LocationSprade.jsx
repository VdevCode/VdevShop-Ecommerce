import React from "react";
import { Link } from "react-router-dom";

const title = "Hơn 1.000 khách hàng đã mua sản phẩm";

const desc =
  " mang đến trải nghiệm mua hàng tuyệt vời cho người dùng. Nhanh tay đăng ký ngay thôi.";

const clientsList = [
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/vi/c/c1/Nh%C3%A2n_v%E1%BA%ADt_v%E1%BA%BD_theo_phong_c%C3%A1ch_anime_-_manga_%C4%91%C6%B0%E1%BB%A3c_t%E1%BA%A1o_t%E1%BB%B1_%C4%91%E1%BB%99ng_b%E1%BB%9Fi_AI_%282%29.jpeg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/Hinh-nen-anime-cute-8-1.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://ngoaingutomato.edu.vn/Data/images/hinh-anh-co-gai-cute-anime.jpeg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/1/5/photo-20-16728916028822010149407.png",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://yt3.googleusercontent.com/ytc/APkrFKYnBseY0RPaE2EC4j-AjVKefYeQh4dQjYk8XxCe0g=s900-c-k-c0x00ffffff-no-rj",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://xwatch.vn/upload_images/images/2023/03/10/4-anh-anime-doraemon.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Tham gia",
  },
  {
    imgUrl: "https://i.pinimg.com/1200x/a2/98/16/a29816cd63e5d731cc70cfd3f88c2ce8.jpg",
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
