import {Product} from "../types";

const ProductThumbnail: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div key={product.id}>
            {product.title}
        </div>
    );
}

export default ProductThumbnail;