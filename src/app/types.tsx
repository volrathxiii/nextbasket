export interface ProductType {
    brand: "",
    category: string;
    description: string;
    discountPercentage: string;
    id: number;
    images: Array<string>;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface ProductsType {
    limit: number;
    products: Array<ProductType>;
    total: number;
    skip: number;
}

export interface ProductModel extends ProductType {
    discountedPrice: number
    discountedPriceDecimal: string
}

export interface ProductsModel extends ProductsType {
    products: Array<ProductModel>
}