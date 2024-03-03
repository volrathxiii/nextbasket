import { type ProductModel } from "@/app/types";
import Image from "next/legacy/image"
import { Button, ButtonGroup } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from "@/app/store";
import { reduceQuantity, addQuantity, remove } from "@/components/Cart/CartSlice";
import { useEffect, useState } from "react";
import styles from './cart.module.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CartThumbnail: React.FC<{ product: ProductModel }> = ({ product }) => {
  const stored = useSelector((state: RootState) => state.cart.data[product.id])
  const [reduceButton, setReduceButton] = useState(false);
  const [addButton, setAddButton] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    if(stored) {
      (stored.count <= 1) ? setReduceButton(true) : setReduceButton(false);
      (stored.count >= stored.product.stock) ? setAddButton(true) : setAddButton(false);
    }
    
  },[stored])

  if(!stored) return (<div></div>);

  return (
    <div key={product.id} className="flex-1">
      <div className={styles['cart-thumbnail']}>

        <div className={styles['cart-details']}>
          <div className={`${styles["cart-title"]} div`}>{product.title}</div>
          <div className={`${styles["cart-brand"]} link`}>{product.brand}</div>
          <span className="h5 muted-color">${product.discountedPrice} x {stored.count} =</span>&nbsp;<span className="h5 secondary-color">${Math.round(product.discountedPrice * stored.count).toLocaleString()}</span>
        </div>
        <div className={styles["cart-thumbnail--image"]}>
          <Image
            src={product.thumbnail}
            alt={product.title}
            layout="fill"
            objectFit='cover'
            sizes="
              (max-width: 438px) 100vw,
              (max-width: 649px) 50vw,
              (max-width: 860px) 33vw,
              (max-width: 1071px) 25vw, 
              20vw"
          />
        </div>

        <div className={styles["cart-tools"]}>
          <ButtonGroup variant="outlined" fullWidth={true} color="warning"  >
            <Button className={`${styles['cart-tools-remove']}`} disabled={reduceButton} onClick={() => dispatch(reduceQuantity({product:stored.product}))}>
              <RemoveIcon />
            </Button>
            <Button className={`${styles['cart-tools-delete']}`} color="error" onClick={() => dispatch(remove({product:stored.product}))}>
              <DeleteOutlineIcon />
            </Button>
            <Button className={`${styles['cart-tools-add']}`} color="success" disabled={addButton} onClick={() => dispatch(addQuantity({product:stored.product}))}>
              <AddIcon />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}

export default CartThumbnail;