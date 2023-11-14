import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"

const sponsorList = [
  {
    imgUrl: "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/04/cam-nang-build-pc-lam-gi-sau-khi-xong-1.jpg",
  },
  {
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibpTnHGvN5wLwJpw-_Os0Ad9l8PamZzulbg&usqp=CAU",
  },
  {
    imgUrl: "https://cdn.vox-cdn.com/thumbor/YIUx9VYWsHu0FelVcguLNGRVwhU=/0x0:2040x1360/2040x1360/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24222843/226422_K_Radtke_budget_phone_buying_guide.jpg",
  },
  {
    imgUrl: "https://www.rebelsport.com.au/on/demandware.static/-/Library-Sites-rebel-shared-library/default/dw02d281c9/category/footwear/span2/231009-HPLP-Footwear-Span2-Adidas-Adizero.jpg",
  },
  {
    imgUrl: "https://www.instyle.com/thmb/SbZpZ3yFB0GF7RlNlmMs12U5OYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-primary-best-work-bags-jkim-0107.jpg-92875b4e2f844ee89ffb9ad2c8e07d9c.jpg",
  },
  {
    imgUrl: "https://images2.thanhnien.vn/Uploaded/dieutrang-qc/2021_10_22/mai-han-duoc-my-pham-2-4439.png",
  },
];

const Sponsor = () => {
  return (
    <div className="sponsor-section section-bg" style={{padding: "10px 0", background: "none"}}>
      <div className="container">
        <div className="section-wrapper">
          <div className="sponsor-slider">
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              loop={true}
              autoplay={{
                delay: 1200,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              // pagination={{ clickable: true }}
              modules={[Pagination,Autoplay]}
              className="mySwiper"
            >
              {sponsorList.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="sponsor-item">
                    <div className="sponsor-thumb">
                      <img src={`${item.imgUrl}`} style={{height: "100px",borderRadius: "10px"}} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
