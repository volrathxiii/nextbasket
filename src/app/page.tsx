import HeroGrid from "@/components/Hero/Grid";
import ServicesFeatured from "@/components/Services/Featured";
import ProductList from '@/components/Product/List';
import PostsFeatured from "@/components/Posts/Featured";
import TestimonialFeatured from "@/components/Testimonial/Featured";
import HeroBanner from "@/components/Hero/Banner";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full background-primary">

      <div className="container container--tall container--md w-full items-center justify-between text-sm">
        <HeroGrid />
      </div>

      <div className="container container--tall container--sm w-full items-center justify-between text-sm">
        <div className="container-title flex flex-col flex-wrap gap-3">
          <h4 className="h4 text-center">Featured Products</h4>
          <h3 className="h3 text-center">BESTSELLER PRODUCTS</h3>
          <p className="paragraph text-center">Products that are extremely popular and you should not miss.</p>
        </div>
        <ProductList limit={10} category="" id="featured-products"></ProductList>
      </div>

      <ServicesFeatured />
      <PostsFeatured />
      <TestimonialFeatured />
      <HeroBanner />
    </div>
  );
}
