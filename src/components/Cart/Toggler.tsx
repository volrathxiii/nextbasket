'use client'
import type { ProductModel } from "@/app/types";
import { IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { add } from "@/components/Cart/CartSlice";
import { useEffect, useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

/**
 * @todo: disable button when item is added
 */
const CartToggler: React.FC<{ product: ProductModel }> = ({ product }) => {
  const stored = useSelector((state: RootState) => state.cart.data[product.id])
  const [cartEnabled, enableCart] = useState<boolean>(false);
  const [notice, setNotice] = React.useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if (stored) {
      enableCart(true)
      setNotice(true)
    } else {
      enableCart(false)
    }
  }, [stored])

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotice(false);
  };

  return (
    <IconButton color={`primary`} disabled={cartEnabled} aria-label="Add to cart" className="button--options" onClick={()=>dispatch(add({ product: product, count: 1 }))}>
      <ShoppingCartOutlinedIcon />
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal:'right' }}
        open={notice}
        autoHideDuration={6000}
        onClose={handleClose}
        
        message="Added to your cart!"
      />
    </IconButton>

  );
}

export default CartToggler;