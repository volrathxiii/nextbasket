'use client'
import type { ProductModel } from "@/app/types";
import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { add, remove } from "@/components/Favorites/FavoriteSlice";
import { useEffect, useState } from "react";


const FavoriteToggler: React.FC<{ product: ProductModel }> = ({ product }) => {
  const stored = useSelector((state: RootState) => state.favorites.data[product.id])
  const [favoriteClass, setFavoriteClass] = useState('info');
  const dispatch = useDispatch()

  useEffect(() => {
    if (stored) {
      setFavoriteClass('primary-color')
    } else {
      setFavoriteClass('info-color')
    }
  }, [stored])

  function toggleFavorite() {
    if (stored) {
      dispatch(remove({ product }))
    } else {
      dispatch(add({ product }))
    }
  }

  return (
    <span className={`${favoriteClass}`}>
    <IconButton className={`button--options`} color="inherit" aria-label="Favorite" onClick={() => toggleFavorite()}>
      <FavoriteBorderOutlinedIcon />
    </IconButton>
    </span>
  );
}

export default FavoriteToggler;