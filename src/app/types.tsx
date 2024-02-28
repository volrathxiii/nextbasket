export interface Product {
    brand: "",
    category: string;
    description: string;
    discountPercentage: number;
    id: number;
    images: object;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
}

export interface Products {
    limit: number;
    products: Array<Product>;
    total: number;
    skip: number;
}