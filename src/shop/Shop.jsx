import React from "react";
import PageHeader from "../components/PageHeader";
import DataProduct from  "/src/product/products.json";
import ProductCard from "./ProductCard";
import PaginationCart from "./PaginationCart";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResults = `Hiển thị 01 - 12 trong ${DataProduct.product.length} sản phẩm`;

const Shop = () => {
  const [GridList, setGridList] = React.useState(true);
  const [products, setProducts] = React.useState(DataProduct.product || []);
  //pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 12;

  const IndexOfLastProduct = currentPage * productsPerPage;
  const IndexOfFirstProduct = IndexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    IndexOfFirstProduct,
    IndexOfLastProduct
  );



  const paginate = (pagenumber) => {
    setCurrentPage(pagenumber);
  };

  const [selectCategort, setSelectCategort] = React.useState("All");
  const menuItems = [...new Set(products.map((val) => val.category))];

  const filerItems = (curcat) => {
    const newItems = products.filter((newVal) => {
      return newVal.category === curcat;
    });
    setSelectCategort(curcat);
    setProducts(newItems);
  };



  return (
    <div>
      <PageHeader title="Cửa hàng của chúng tôi." curPage="Cửa hàng" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center row-cols-1 g-4">
            {/* left  */}
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                <div className="">
                  <ProductCard GridList={GridList} products={currentProducts} />
                </div>

                <PaginationCart
                  productsPerPage={productsPerPage}
                  totalsProduct={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            {/* right  */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} GridList={GridList} />
                <ShopCategory 
                  filerItems={filerItems}
                  setItems={setProducts}
                  menuItems={menuItems}
                  setProducts={setProducts}
                  selectCategort={selectCategort}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
