import ImageView from "@/components/ImageView/ImageView"
import { getProduct } from "@/api/Product";
import styles from "./product.module.css"
import productStyles from "@/components/Product/products.module.css"
import { Stack, Button, IconButton, Rating, Link, Typography, Breadcrumbs } from "@mui/material";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteToggler from "@/components/Favorites/Toggler";
import ProductList from "@/components/Product/List";
import CartToggler from "@/components/Cart/Toggler";
import ProductDescription from "@/components/Product/Description";
import IconAWS from "@/components/Icons/aws"
import IconHooli from "@/components/Icons/hooli"
import IconLyft from "@/components/Icons/lyft"
import IconPiper from "@/components/Icons/piper"
import IconStripe from "@/components/Icons/stripe"
import IconReddit from "@/components/Icons/reddit"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default async function Product({ params }: { params: { slug: number } }) {
  const product = await getProduct(params.slug)
  let availability = <span className="error-color">Out of stock</span>
  if (product.stock <= 10 && product.stock > 0) {
    availability = <span className="warning-color">Only {product.stock} left</span>
  } else if (product.stock > 10) {
    availability = <span className="primary-color">In Stock</span>
  }

  const breadcrumbs = [
    <span className="link" key="1"><Link underline="hover"  color="inherit" href="/">Home</Link></span>,
    <span className="h6 muted-color" key="2">Shop</span>,
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className={`px-9 py-6 container--sx mx-auto w-full`}>
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<span className="muted-color"><NavigateNextIcon fontSize="small" color="inherit" /></span>}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
      </div>
      <div className={`container container--sx mx-auto w-full`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-7 pb-12`}>
          <div><ImageView images={product.images} /></div>
          <div className={`${styles['product-info']}`}>
            <div className={`${styles['product-details']}`}>
              <div className="h4 color-muted">{product.title}</div>
              <div className="product-rating"><div><Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly /></div> <span className="h6">Reviews</span></div>
              <h3 className="h3">${product.discountedPriceDecimal}</h3>
              <div className="h6 product-availability">Availability: {availability}</div>
              <div className={`paragraph ${productStyles['product-description--mobile']}`}>{product.description}</div>
            </div>
            <div className={`${styles['product-variants']}`}>
              <span className={`${styles['product-variant']} ${styles['product-variant--blue']}`}>Blue</span>
              <span className={`${styles['product-variant']} ${styles['product-variant--green']}`}>Green</span>
              <span className={`${styles['product-variant']} ${styles['product-variant--orange']}`}>Orange</span>
              <span className={`${styles['product-variant']} ${styles['product-variant--black']}`}>Black</span>
            </div>
            <div className={`${styles['product-options']}`}>
              <Stack direction="row" spacing={0}>
                <Button color="primary" variant="contained">Select Options</Button>
                <FavoriteToggler product={product}></FavoriteToggler>
                <CartToggler product={product}></CartToggler>
                <IconButton>
                  <VisibilityOutlinedIcon />
                </IconButton>
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className={`w-full background-primary`}>
        <div className={`container container--sx mx-auto w-full`}>
          <ProductDescription description={product.description} title={product.title} image={product.thumbnail} />
        </div>
      </div>
      <div className="container container--tall container--sm w-full items-center justify-between text-sm hidden sm:block">
        <div className="container-title flex flex-col flex-wrap gap-3">
          <h3 className="h3 text-left">SIMILAR PRODUCTS</h3>
        </div>
        <ProductList limit={8} category={product.category} id="similar-products"></ProductList>
      </div>
      <div className={`container container--tall container--sx mx-auto w-full ${styles['footer-grid']} justify-items-center items-center `}>
        <div className="footer-icon">
          <IconHooli />
        </div>
        <div className="footer-icon">
          <IconLyft />
        </div>
        <div className="footer-icon">
          <IconPiper />
        </div>
        <div className="footer-icon">
          <IconStripe />
        </div>
        <div className="footer-icon">
          <IconAWS />
        </div>
        <div className="footer-icon">
          <IconReddit />
        </div>
      </div>

    </div>
  )
}