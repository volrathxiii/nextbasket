'use client'
import type { ProductModel } from "@/app/types";
import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { add } from "@/app/components/Cart/CartSlice";
import { useEffect, useState } from "react";

/**
 * @todo: disable button when item is added
 */
const CartToggler: React.FC<{ product: ProductModel }> = ({ product }) => {
    const stored = useSelector((state: RootState) => state.cart.data[product.id])
    const [cart, setCart] = useState('muted');
    const dispatch = useDispatch()

    useEffect(() => {
        if (stored) {
            setCart('primary')
        } else {
            setCart('muted')
        }
    }, [stored])

    function toggleCart() {
        // if (stored) {
        //     dispatch(remove({ product }))
        // } else {
            dispatch(add({ product:product,count:1 }))
        // }
    }


    return (
        <IconButton color={cart} variant="outlined" aria-label="Add to cart" className="button--options" onClick={() => toggleCart()}>
            <ShoppingCartOutlinedIcon />
        </IconButton>

    );
}

export default CartToggler;