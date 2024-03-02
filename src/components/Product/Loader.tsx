'use client';
import { createRoot } from 'react-dom/client';
import { useState, useEffect, ReactElement } from 'react'
import { type ProductModel } from "@/app/types";
import ProductThumbnail from '@/components/Product/Thumbnail';
import { getProducts } from "@/api/Product";

const ProductsLoader: React.FC<{ page: number, limit: number, target: string, category: string, initial: ProductModel[], total: number }> = ({ page, limit, target, category, initial = [], total = 0 }) => {
  const [isLoading, setLoading] = useState(false)
  const [hasMoreItems, setMoreItems] = useState(true)
  const [currentPage, setPage] = useState(page)
  const [productList, setProducts] = useState<ProductModel[]>(initial)
  const [container, setContainer] = useState<React.ReactElement>()

  useEffect(() => {
    let children: React.ReactElement[] = [];
    productList.map((product) => {
      children.push(<ProductThumbnail key={product.id} product={product} priority={false} />)
    })

    if (container) container.render(children)
  }, [productList, target, container])

  function loadMore() {
    let targetPage = currentPage + 1;
    setPage(targetPage)
    setLoading(true)

    return getProducts(targetPage, limit, category)
      .then((data) => {
        const ProductList = [...productList, ...data.products];
        setProducts(ProductList);
        if (!container) {
          const targetElement = document.getElementById(target);
          if (targetElement) {
            const rootElement: React.ReactElement = createRoot(targetElement)
            setContainer(rootElement);
          }
        }

        if (data.skip + data.limit >= data.total) setMoreItems(false)
        setLoading(false);
      })
  }

  if (productList.length >= total) {
    return <div></div>
  }

  if (isLoading) {
    return <button>Loading...</button>
  }

  if (hasMoreItems) {
    return (
      <button onClick={loadMore}>Load More</button>
    )
  }
};

export default ProductsLoader