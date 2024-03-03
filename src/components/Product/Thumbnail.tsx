import { type ProductModel } from "@/app/types";
import Image from "next/legacy/image"
import Link from 'next/link'

import styles from './products.module.css'

const ProductThumbnail: React.FC<{ product: ProductModel, priority: boolean }> = ({ product, priority = false }) => {
  return (
    <div key={product.id} className="basis-1/6 flex-1">
      <Link href={`/product/${product.id}`}>
        <div className={styles['product-thumbnail']}>
          <div className={styles["product-thumbnail--image"]}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              layout="fill"
              objectFit='cover'
              sizes="
                (max-width: 438px) 100vw,
                (max-width: 649px) 50vw,
                (max-width: 860px) 33vw,
                (max-width: 1071px) 25vw, 
                20vw"
              priority={priority}
            />
          </div>
          <div className={`${styles["product-title"]} div`}>{product.title}</div>
          <div className={`${styles["product-brand"]} link`}>{product.brand}</div>
          <div className={styles["product-price"]}>
            <span className="h5 muted-color">${product.price}</span>&nbsp;
            <span className="h5 secondary-color">${product.discountedPrice}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductThumbnail;