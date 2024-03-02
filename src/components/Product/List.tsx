import ProductThumbnail from '@/components/Product/Thumbnail';
import ProductsLoader from '@/components/Product/Loader';
import styles from './products.module.css'
import { getProducts } from "@/api/Product";

const ProductList: React.FC<{ limit: number, category: string, id: string }> = async ({ limit, category, id }) => {
  const data = await getProducts(0, limit, category)
  const listItems = data.products.map(product => <ProductThumbnail key={product.id} product={product} priority={true} />)

  return (
        <ProductsLoader page={1} target={id} limit={limit} category={category} initial={data.products} total={data.total}>
          {listItems}
        </ProductsLoader>
  )
}

export default ProductList;