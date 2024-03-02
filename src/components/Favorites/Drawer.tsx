'use client'
import Link from '@mui/material/Button';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import styles from '@/components/AppHeader/appHeader.module.css'
import { useSelector } from 'react-redux';
import type { RootState } from "@/app/store";
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import ProductThumbnail from '@/components/Product/Thumbnail';

export default function FavoriteDrawer() {
  const favorites = useSelector((state: RootState) => state.favorites.data)
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const [thumbnails, setThumbnails] = useState<React.JSX.Element[]>([]);

  useEffect(() => {
    const favoriteItems = Object.keys(favorites).length
    let tempThumbnails = []
    setCount(favoriteItems)

    if(favoriteItems >= 1) {
      for (const [key, value] of Object.entries(favorites)) {
        tempThumbnails.push(<ProductThumbnail key={value.id} product={value} priority={false} />)
      }
    } else {
      tempThumbnails.push(<Box key={1} className="text-center w-full pb-10">Not yet sure if you want to buy? Click that heart instead!</Box>)
    }

    setThumbnails(tempThumbnails)
    
  }, [favorites])

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 300, bgcolor: 'muted.light' }} role="presentation" onClick={toggleDrawer(false)}>
      <div className='px-3 py-20 min-h-screen'>
        <div className="container-title flex flex-col flex-wrap gap-3 pb-14">
          <h4 className="h4 text-center">Saved Products</h4>
          <h3 className="h3 text-center">FAVORITES</h3>
        </div>
        <div className="flex flex-row flex-wrap gap-7 content-start">
          {thumbnails}
        </div>
      </div>
    </Box>
  );

  return (
    <span>
      <Link onClick={toggleDrawer(true)} sx={{ minWidth: 40, fontSize: 12 }} className={`${styles['nav-item-menu']}`}>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: { xs: 40, sm: 40, md: 18, lg: 18 } }} /> {`${count}`}
      </Link>
      <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </span>

  );
}