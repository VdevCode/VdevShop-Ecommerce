import React from "react";
import { Link } from "react-router-dom";


const Title = "Bài post phổ biến"

const postList = [
  {
    id: 1,
    imgUrl: "/src/assets/images/blog/10.jpg",
    imgAlt: "rajibraj91",
    title: "Luôn vui cười mỗi ngày",
    date: "Ngày 11 tháng 11 năm 2023",
  },
  {
    id: 2,
    imgUrl: "/src/assets/images/blog/11.jpg",
    imgAlt: "rajibraj91",
    title: "Sản phẩm shopcart chất lượng không ?",
    date: "Ngày 4 tháng 11 năm 2023",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/12.jpg",
    imgAlt: "rajibraj91",
    title: "Từ Coder đến Developer",
    date: "Ngày 6 tháng 11 năm 2023",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/09.jpg",
    imgAlt: "rajibraj91",
    title: "Phỏng vấn intern web developer",
    date: "Ngày 3 tháng 11 năm 2023",
  },
];

const PopularPost = () => {
  return (
    <div className="widget widget-post">
      <div className="widget-header">
        <h5 className="title">{Title}</h5>
      </div>

      <ul className="widget-wrapper">
            {
                postList.map((post,index) => (
                    <li key={index} className="d-flex flex-wrap justify-content-between">
                        <div className="post-thumb">
                            <Link to={`/blog/${post.id}`}>
                                <img src={post.imgUrl} alt={post.imgAlt} />
                            </Link>
                        </div>
                        <div className="post-content">
                            <Link to={`/blog/${post.id}`}>
                                <h5>{post.title}</h5>
                            </Link>
                            <span>{post.date}</span>
                        </div>
                    </li>
                ))
            }
      </ul>
    </div>
  );
};

export default PopularPost;
