'use client'
import type { ProductModel } from "@/app/types";
import { IconButton } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { add, remove } from "@/app/components/Favorites/FavoriteSlice";
import {useEffect, useState} from "react";


const FavoriteToggler: React.FC<{ product: ProductModel }> = ({ product }) => {
    const stored = useSelector((state: RootState) => state.favorites.data[product.id])
    const [favorite,setFavorite] = useState('muted');
    const dispatch = useDispatch()

    useEffect(()=>{
        if(stored) {
            setFavorite('primary')
        } else {
            setFavorite('muted')
        }
    },[stored])

    function toggleFavorite() {
        if (stored) {
            dispatch(remove({ product }))
        } else {
            dispatch(add({ product }))
        }
    }


    return (
        <IconButton className={`button--options`} color={favorite} variant="outlined" aria-label="Favorite" onClick={() => toggleFavorite()}>
            <FavoriteBorderOutlinedIcon />
        </IconButton>
    );
}

export default FavoriteToggler;