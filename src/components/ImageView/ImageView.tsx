'use client';
import Image from "next/image"
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@mui/material'
import styles from "./imageview.module.css";

const ImageView: React.FC<{ images: Array<string> }> = ({ images }) => {
  const indicators: React.ReactElement[] = [];
  images.map((image) => (
    indicators.push(
      <div key={image} className={`${styles.imageindicator}`}>
        <Image
          src={`${image}`}
          alt={`${image}`}
          fill
          sizes="20vw"
          style={{
            objectFit: "cover"
          }} />
      </div>)
  ))

  return (
    <div className={`${styles.view}`}>

      <Carousel
        autoPlay={false}
        fullHeightHover={false}
        height={450}

        IndicatorIcon={indicators}
        indicatorContainerProps={{
          className: styles.indicatorcontainer,
        }}

        indicatorIconButtonProps={{
          className: styles.indicatorbutton,
        }}
      >
        {
          images.map((image) => (
            <Paper key={image} className={`${styles.imageview}`}>
              <Image
                src={`${image}`}
                alt={`${image}`}
                priority
                fill
                sizes="20vw"
                style={{
                  objectFit: "cover"
                }} />
            </Paper>
          ))
        }
      </Carousel>

    </div>
  );
}

export default ImageView;