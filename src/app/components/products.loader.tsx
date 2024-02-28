'use client';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react'
import {Product, Products} from "../types";
import ProductThumbnail from './product.thumbnail';

const ProductsLoader: React.FC<{ page: number, limit: number, target: string }> = ({ page, limit, target }) => {
  const [isLoading, setLoading] = useState(false)
  const [currentPage, setPage] = useState(page)
  const [productList, setProducts] = useState([])
  let container = null

  useEffect(() => {
    let children = [];
    productList.map(product=>{
      children.push( <ProductThumbnail product={product}/>)
    })
    if(!container) {
      const targetElement = document.getElementById(target);
      container = createRoot(targetElement)
    }
    
    container.render(children)

    setLoading(false);
  }, [productList, target])

  function loadMore() {
    setPage(currentPage+1)
    setLoading(true)
    
    let skip = currentPage * limit
  
    return fetch('https://dummyjson.com/products?limit=10&skip='+skip)
      .then((res) => res.json())
      .then((data:Products) => {
        const ProductList = [...productList, ...data.products];
        setProducts(ProductList);

    })
  }

  if(isLoading) {
    return <button>Loading...</button>
  }

  return (
    <button onClick={loadMore}>Load More</button>
  )
};

export default ProductsLoader