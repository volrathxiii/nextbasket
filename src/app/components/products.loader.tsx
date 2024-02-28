'use client';
import { createRoot } from 'react-dom/client';
import { useState, useEffect } from 'react'
import {Product, Products} from "../types";
import ProductThumbnail from './product.thumbnail';

const ProductsLoader: React.FC<{ page: number, limit: number, target: string }> = ({ page, limit, target }) => {
  const [isLoading, setLoading] = useState(false)
  const [hasMoreItems, setMoreItems] = useState(true)
  const [currentPage, setPage] = useState(page)
  const [productList, setProducts] = useState<Product[]>([])
  const [container, setContainer] = useState<HTMLElement>()

  useEffect(() => {
    let children: React.ReactElement[] = [];
    productList.map((product:Product)=>{
      children.push( <ProductThumbnail key={product.id} product={product}/>)
    })

    if(container) container.render(children)

    setLoading(false);
  }, [productList, target, container])

  function loadMore() {
    let skip = currentPage * limit
    setPage(currentPage+1)
    setLoading(true)

    return fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data:Products) => {
        const ProductList = [...productList, ...data.products];
        setProducts(ProductList);
        if(!container) {
          const targetElement = document.getElementById(target);
          if(targetElement){
            const rootElement = createRoot(targetElement)
            setContainer(rootElement);
          }
        }
        
        if(data.skip+data.limit >= data.total) setMoreItems(false)
    })
  }

  if(isLoading) {
    return <button>Loading...</button>
  }

  if(hasMoreItems) {
      return (
          <button onClick={loadMore}>Load More</button>
      )
  }
};

export default ProductsLoader