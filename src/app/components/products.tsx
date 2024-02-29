import {Product,Products} from "../types";
import ProductThumbnail from './product.thumbnail';
import ProductsLoader from './products.loader';

 
export const getInitialProps = (async (limit:number, category:string) => {
  const res = await fetch(`${process.env.PRODUCTS_API}?limit=${limit}&skip=0`)
  const data: Products = await res.json()
  // Pass data to the page via props
  return { props: { data } }
})

const ProductList: React.FC<{ limit: number, category: string, id: string }> = async ({ limit, category, id }) => {
  const data = await getInitialProps(limit, category)
  const listItems = data.props.data.products.map(product => <ProductThumbnail key={product.id} product={product}/>)
  return (
    <div className="product-list">
      <div className="flex flex-row flex-wrap gap-7">
        {listItems}
      </div>
      <div id={id} className="flex flex-row flex-wrap gap-7">

      </div>
      <div>
        <ProductsLoader page={1} target={id} limit={limit}/>
      </div>
    </div>
  )
}

export default ProductList;