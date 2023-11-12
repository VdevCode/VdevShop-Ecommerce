import React from "react";
import { Link } from "react-router-dom";


const Title = "Bài post phổ biến"

const postList = [
  {
    id: 1,
    imgUrl: '/src/assets/images/blog/01.jpg',
    imgAlt: "rajibraj91",
    title: 'Vdevshop khai trương shop mọi sản phẩm',
    date: "Ngày 11 tháng 11 năm 2023",
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/blog/02.jpg',
    imgAlt: "rajibraj91",
    title: 'Chào đón Halloween, Fash Sale lên đến 50%.',
    date: "Ngày 4 tháng 11 năm 2023",
  },
  {
    id: 3,
    imgUrl: "/src/assets/images/blog/03.jpg",
    imgAlt: "rajibraj91",
    title: "Mừng lễ Noel, Vdevshop quyết định Fash Sale",
    date: "Ngày 6 tháng 11 năm 2023",
  },
  {
    id: 4,
    imgUrl: "/src/assets/images/blog/04.jpg",
    imgAlt: "rajibraj91",
    title: 'Tết Nguyên Đán 2024, Sale các mặt hàng giảm còn 80%',
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
                                <p><strong>{post.title}</strong></p>
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
