
import { type ProductType, type ProductModel, type ProductsModel} from "../app/types";

const API_URL=`https://dummyjson.com/products`;
/**
 * post process data if needed, so we dont have to
 * polute views with multiple computation
 */
function Product(data:ProductType) : ProductModel {
    const computedPrice = Math.round(Math.abs(data.price*((parseFloat(data.discountPercentage)/100)-1)))
    return {
        brand: data.brand,
        category: data.category,
        description: data.description,
        discountPercentage: data.discountPercentage,
        id: data.id,
        images: data.images,
        price: data.price,
        rating: data.rating,
        stock: data.stock,
        thumbnail: data.thumbnail,
        title: data.title,
        discountedPrice: computedPrice,
        discountedPriceDecimal: computedPrice.toFixed(2)
    }
}

export function getProducts(page:number =0, limit:number = 10, category:string = "")
{
    let TARGET_API = API_URL; 
    if(category) TARGET_API = `${API_URL}/category/${category}`
    let skip = page * limit;
    return fetch(`${TARGET_API}?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((data:ProductsModel) => {
            let products: ProductModel[] = [];
            data.products.map((product)=>{
                products.push(Product(product))
            })
            data.products = products;
            return data
    })
}

export function getProduct(id:number) {
    return fetch(`${API_URL}/${id}`)
        .then((res) => res.json())
        .then((data:ProductModel) => {
            return Product(data)
    })
}