import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import ProductDisplay from "./ProductDisplay";
import Review from "./Review";
import PopularPost from "./PopularPost";

const storeTitle = "cửa hàng / ";

const SingleProduct = () => {
  const [products, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("https://rnmnwz-3000.csb.app/product") // Sử dụng đường dẫn tương đối
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, [id]);

  const result = products.filter((val) => val.id === id);
  return (
    <div className="">
      <PageHeader
        title="Sản phẩm bạn lựa chọn"
        curPage={`${storeTitle} xem sản phẩm`}
      />
      <div className="shop-single padding-tb aside-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article className="">
                <div className="product-details">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                        <div className="swiper-container pro-single-top">
                          <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={false}
                            autoplay={{
                              delay: 2500,
                              disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            navigation={{
                              nextEl: ".pro-single-prev",
                              prevEl: ".pro-single-next",
                            }}
                            className="mySwiper"
                          >
                            {result.map((item) => (
                              <SwiperSlide key={item.id}>
                                <div className="single-thumb">
                                  <img src={item.img} alt="Product" />
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="post-content">
                        <div className="">
                          {result.map((item) => (
                            <ProductDisplay key={item.id} item={item} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                {
                  result.map((item) => (
                    <Review key={item.id} item={item} />
                  ))
                }
                </div>
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <div className="ps-lg-4">
                <PopularPost />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
