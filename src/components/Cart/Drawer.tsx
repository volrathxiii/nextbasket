'use client'
import * as React from 'react';
import Link from '@mui/material/Button';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button, ButtonGroup } from "@mui/material";
import styles from '@/components/AppHeader/appHeader.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CartThumbnail from '@/components/Cart/Thumbnail';

export default function CartDrawer() {
  const cart = useSelector((state: RootState) => state.cart.data)
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [checkoutButton, disableCheckoutButton] = useState(true);
  const [thumbnails, setThumbnails] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const cartItems = Object.keys(cart).length;
    const tempThumbnails = []
    let total:number = 0;
    if(cartItems) {
      setCount(cartItems)
      disableCheckoutButton(false)
      // generate cart summary
      for (const [key, value] of Object.entries(cart)) {
        total += value.count * value.product.discountedPrice
        tempThumbnails.push(<CartThumbnail key={value.product.id} product={value.product} />)
      }
      tempThumbnails.push(<Box key={1} className="text-center w-full pt-5">
        <div className='h6'>TOTAL</div>
        <div className="h3">${Math.round(total).toLocaleString()}</div>
      </Box>)
    } else {
      // generate empty cart message
      tempThumbnails.push(<Box key={1} className="text-center w-full pb-10">Don&apos;t leave empty shopping cart in parking space please!</Box>)
      disableCheckoutButton(true)
    }

    setThumbnails(tempThumbnails)
    
  }, [cart])

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ maxWidth: { xs: 1, sm: 450, md: 450, lg: 450 }, bgcolor: 'muted.light' }} role="presentation" >
      <div className='px-6 py-20 min-h-screen'>
        <div className="container-title flex flex-col flex-wrap gap-3 pb-14">
          <h4 className="h4 text-center">Checkout</h4>
          <h3 className="h3 text-center">CART</h3>
        </div>
        <div className="flex flex-row flex-wrap gap-3 content-start">
          {thumbnails}
        </div>
        <div className="mx-auto w-full pt-10 text-center">
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Cart options buttons"
            size='large'
          >
            <Button variant='outlined' onClick={toggleDrawer(false)}>Continue Shopping</Button>
            <Button disabled={checkoutButton}>Checkout</Button>
          </ButtonGroup>
        </div>
      </div>
    </Box>
  );

  return (
    <React.Fragment>
      <Link onClick={toggleDrawer(true)} sx={{ minWidth: 40, fontSize: 12 }} className={`${styles['nav-item-menu']}`}>
        <ShoppingCartOutlinedIcon sx={{ fontSize: { xs: 40, sm: 40, md: 18, lg: 18 } }} /> {`${count}`}
      </Link>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </React.Fragment>

  );
}