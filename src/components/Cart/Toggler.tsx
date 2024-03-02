'use client'
import type { ProductModel } from "@/app/types";
import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { add } from "@/components/Cart/CartSlice";
import { useEffect, useState } from "react";

/**
 * @todo: disable button when item is added
 */
const CartToggler: React.FC<{ product: ProductModel }> = ({ product }) => {
  const stored = useSelector((state: RootState) => state.cart.data[product.id])
  const [cartEnabled, enableCart] = useState<boolean>(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (stored) {
      enableCart(true)
    } else {
      enableCart(false)
    }
  }, [stored])

  return (
    <IconButton color={`primary`} disabled={cartEnabled} aria-label="Add to cart" className="button--options" onClick={()=>dispatch(add({ product: product, count: 1 }))}>
      <ShoppingCartOutlinedIcon />
    </IconButton>

  );
}

export default CartToggler;