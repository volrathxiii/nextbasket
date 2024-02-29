import {Product} from "../types";
import Image from 'next/image'

const ProductThumbnail: React.FC<{ product: Product }> = ({ product }) => {
    console.log(product);
    return (
        <div key={product.id} className="basis-1/6 flex-1 items-center justify-between ">
            <div className="product-thumbnail">
            <div className="product-thumbnail--image">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    fill
                    objectFit='cover'
                    sizes="
                        (max-width: 1200px) 30vw, 
                        (max-width: 1023px) 100vw,
                        100vw"
                />
            </div>
            <h5 className="h5 product-title">{product.title}</h5>
            <div className="link product-brand">{product.brand}</div>
            <div className="product-price">
                <span className="h5 muted-color">${product.price}</span>&nbsp;
                <span className="h5 secondary-color">${Math.round(Math.abs(product.price*((parseFloat(product.discountPercentage)/100)-1)))}</span>
            </div>
            </div>
        </div>
    );
}

export default ProductThumbnail;