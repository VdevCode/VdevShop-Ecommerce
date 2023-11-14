import React from "react";

const SelectedCategory = (select) => {
  return (
    <select className="form-select">
      <option value="all">Tất cả danh mục</option>
      <option value="electronics">Món ăn vặt</option>
      <option value="computer">Máy tính</option>
      <option value="smart-home">Điện thoại</option>
      <option value="laptop">Laptop</option>
      <option value="tablet">Máy tính bảng</option>
      <option value="watch">Đồng hồ</option>
    </select>
  );
};

export default SelectedCategory;
