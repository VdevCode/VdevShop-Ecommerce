import React from "react";

const ShopCategory = ({
  filerItems,
  setItems,
  menuItems,
  setProducts,
  selectCategort,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">Tất cả trong danh mục</h5>
      </div>
      <div className="">
        <button
          className={`m-2 ${selectCategort  === "All" ? "bg-warning" : "" }`}
        >
          All
        </button>
        {menuItems.map((item, index) => {
          return (
            <button
              onClick={() => filerItems(item)}
              className={`m-2 ${selectCategort  === item ? "bg-warning" : ""}`}
              key={index} 
            >
              {item}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
