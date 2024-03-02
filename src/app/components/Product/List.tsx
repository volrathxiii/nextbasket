import ProductThumbnail from '@/app/components/Product/Thumbnail';
import ProductsLoader from '@/app/components/Product/Loader';
import styles from './products.module.css'
import { getProducts } from "@/app/api/Product";

const ProductList: React.FC<{ limit: number, category: string, id: string }> = async ({ limit, category, id }) => {
  const data = await getProducts(0 ,limit, category)
  const listItems = data.products.map(product => <ProductThumbnail key={product.id} product={product} priority={true}/>)
  
  return (
    <div className={styles['product-list']}>
      <div id={id} className="flex flex-row flex-wrap gap-7 content-start">
        {listItems}
      </div>
      <div>
          <ProductsLoader page={1} target={id} limit={limit} category={category} initial={data.products} total={data.total} />
      </div>
    </div>
  )
}

export default ProductList;