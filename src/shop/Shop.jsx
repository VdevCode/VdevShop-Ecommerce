import React from 'react'
import PageHeader from '../components/PageHeader'
import DataProduct from "../product/products.json"
import ProductCard from './ProductCard'
import { Pagination } from "react-bootstrap";

const showResults = "Hiển thị 01 - 12 trong 139 kết quả"

const Shop = () => {
  const [GridList, setGridList] = React.useState(true)
  const [products,setProducts] = React.useState(DataProduct)

  //pagination
  const [currentPage,setCurrentPage] = React.useState(1)
  const [productsPerPage] = 12

  const IndexOfLastProduct = currentPage * productsPerPage
  const IndexOfFirstProduct = IndexOfLastProduct - productsPerPage
  const currentProducts = products.slice(IndexOfFirstProduct,IndexOfLastProduct)

  const paginate = (pagenumber) =>{
    setCurrentPage(pagenumber)
  }


  return (
    <div>
        <PageHeader title="Cửa hàng của chúng tôi." curPage="Cửa hàng"/>
        <div className='shop-page padding-tb'>
            <div className='container'>
              <div className='row justify-content-center row-cols-1 g-4'>
                <div className='col-lg-8 col-12'>
                    <article>
                      <div className='shop-title d-flex flex-wrap justify-content-between'>
                        <p>{showResults}</p>
                        <div className={`product-view-mode ${GridList ? 'gridActive' : 'listActive'}`}>
                            <a className='grid' onClick={() => setGridList(!GridList)}>
                              <i className='icofont-ghost'></i>
                            </a>
                            <a className='list' onClick={() => setGridList(!GridList)}>
                              <i className='icofont-listine-dots'></i>
                            </a>
                        </div>    

                      </div>

                      <div className=''>
                        <ProductCard  GridList={GridList} products={products} />
                      </div>

                      <Pagination />

                    </article>
                </div>
                <div className='col-lg-4 col-12'>
                  right
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Shop
