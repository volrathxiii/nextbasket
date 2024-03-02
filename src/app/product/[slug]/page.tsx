import ImageView from "@/app/components/ImageView/ImageView"
import { getProduct } from "@/app/api/Product";
import styles from "./product.module.css"
import { Stack, Button, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteToggler from "@/app/components/Favorites/Toggler";
import ProductList from "@/app/components/Product/List";
import CartToggler from "@/app/components/Cart/Toggler";

export default async function Product({ params }: { params: { slug: number } }) {
    const product = await getProduct(params.slug)

    return (
        <div className="flex flex-col items-center w-full">
            <div className={`container container--sx mx-auto w-full`}>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-7 pb-12`}>
                    <div><ImageView images={product.images} /></div>
                    <div className={`${styles['product-info']}`}>
                        <div className={`${styles['product-details']}`}>
                            <div className="h4 color-muted">{product.title}</div>
                            <div className="product-rating">{product.rating} <span className="h6">Reviews</span></div>
                            <h3 className="h3">${product.discountedPriceDecimal}</h3>
                            <div className="h6 product-availability">Availability: {product.stock}</div>
                        </div>
                        <div className={`${styles['product-variants']}`}>
                            <span className={`${styles['product-variant']} ${styles['product-variant--blue']}`}>Blue</span>
                            <span className={`${styles['product-variant']} ${styles['product-variant--green']}`}>Green</span>
                            <span className={`${styles['product-variant']} ${styles['product-variant--orange']}`}>Orange</span>
                            <span className={`${styles['product-variant']} ${styles['product-variant--black']}`}>Black</span>
                        </div>
                        <div className={`${styles['product-options']}`}>
                            <Stack direction="row" spacing={2}>
                                <Button color="primary" variant="contained">Select Options</Button>
                                <FavoriteToggler product={product}></FavoriteToggler>
                                <CartToggler product={product}></CartToggler>
                                <IconButton color="muted" variant="outlined" aria-label="Visibility" className="button--options">
                                    <VisibilityOutlinedIcon />
                                </IconButton>
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-full background-primary`}>
                <div className={`container container--sx mx-auto w-full`}>
                    MORE INFO
                </div>
            </div>
            <div className={`container container--sx mx-auto w-full`}>
                <ProductList limit={8} category={product.category} id="similar-products"></ProductList>
            </div>
            <div className={`container container--sx mx-auto w-full`}>
                LOGOS
            </div>

        </div>
    )
}