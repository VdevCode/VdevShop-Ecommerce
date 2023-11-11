import React from "react";

const Title = "Thẻ tags phổ biến";

const tagsList = [
  { link: "#", text: "Đồ ăn vặt" },
  { link: "#", text: "Máy tính xách tay" },
  { link: "#", text: "Đồ điện tử" },
  { link: "#", text: "Dụng cụ bếp" },
  { link: "#", text: "Món ăn nhanh" },
  { link: "#", text: "Thiết bị học tập" },
  { link: "#", text: "Quần áo" },
  { link: "#", text: "Giày" },
  { link: "#", text: "Túi xách" },
];

const Tags = () => {
  return (
    <div className="widget widget-tags ">
        <div className="widget-header">
            <h5>{Title}</h5>
        </div>
        <div className="widget-wrapper">
            {
                tagsList.map((tag, index) => (
                    <li className="" key={index}>
                        <a href={tag.link}>{tag.text}</a>
                    </li>
                ))
            }
        </div>
    </div>  
  )
};

export default Tags;
