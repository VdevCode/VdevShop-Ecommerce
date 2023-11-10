import React from "react";

const PaginationCart = ({
  productsPerPage,
  totalsProduct,
  paginate,
  activePage,
}) => {
  const pagenumbers = [];
  for (let i = 0; i < Math.ceil(totalsProduct / productsPerPage); i++) {
    pagenumbers.push(i + 1);
  }

  return (
    <ul className="default-pagination lab-ul">
      <li>
        <a
          onClick={() => {
            if (activePage < pagenumbers.length) {
              paginate(activePage - 1);
            }
          }}
        >
          <i className="icofont-rounded-left"></i>
        </a>
      </li>
      {pagenumbers.map((page) => (
        <li
          key={page}
          className={`pageitem ${page === activePage ? "bg-warning" : ""}`}
        >
          <button className="bg-transparent" onClick={() => paginate(page)}>
            {page}
          </button>
        </li>
      ))}
      <li>
        <a
          onClick={() => {
            if (activePage < pagenumbers.length) {
              paginate(activePage + 1);
            }
          }}
        >
          <i className="icofont-rounded-right"></i>
        </a>
      </li>
    </ul>
  );
};

export default PaginationCart;
