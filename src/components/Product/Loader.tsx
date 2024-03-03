'use client';
import { useState, useEffect, useRef } from 'react'
import { type ProductModel } from "@/app/types";
import ProductThumbnail from '@/components/Product/Thumbnail';
import { getProducts } from "@/api/Product";
import { Button } from '@mui/material';
import styles from './products.module.css'

const ProductsLoader: React.FC<{ page: number, limit: number, target: string, category: string, initial: ProductModel[], total: number, children: React.ReactNode }> = ({ page, limit, target, category, initial = [], total = 0, children }) => {
  const [isLoading, setLoading] = useState(false)
  const [currentPage, setPage] = useState(page)
  const [productList, setProducts] = useState<ProductModel[]>(initial)
  const [buttonText, setButtonText] = useState<string>('')
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [childrenHTML, setChildrenHTML] = useState(children)
  const [hasMore, setHasMore] = useState((total > initial.length) ? 'block' : 'hidden')

  // refresh view
  useEffect(() => {
      let children: React.ReactNode[] = [];
      productList.map((product) => {
        children.push(<ProductThumbnail key={product.id} product={product} priority={false} />)
      })
      setChildrenHTML(children)
      console.log('refresh view', productList.length)
  }, [productList])

  // update button
  useEffect(() => {
    console.log('refresh button')
    if (isLoading) {
      setButtonText('LOADING...')
      setButtonDisabled(true)
    } else {
      setButtonText('LOAD MORE PRODUCTS')
      setButtonDisabled(false)
    }
  }, [isLoading])

  function loadMore() {
    let targetPage = currentPage + 1;
    setPage(targetPage)
    setLoading(true)

    return getProducts(targetPage, limit, category)
      .then((data) => {
        const newProducts = [...productList, ...data.products];
        setProducts(newProducts);

        if (data.skip + data.limit >= data.total) setHasMore('hidden')
        setLoading(false);
      })
  }

  return (
    <div className={styles['product-list']}>
      <div className="flex flex-row flex-wrap gap-7 content-start">
        {childrenHTML}
      </div>
      <div className={`w-full text-center pt-20 ${hasMore}`}>
        <Button variant='outlined' disabled={buttonDisabled} onClick={loadMore}>{buttonText}</Button>

      </div>
    </div>
  )
};

export default ProductsLoader