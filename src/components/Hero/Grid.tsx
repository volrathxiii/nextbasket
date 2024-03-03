import Image from "next/image"
import styles from '@/components/Hero/hero.module.css'

const HeroGrid = () => {
  return (
    <div className={`${styles["feature-grid"]}`}>
      <div className={`${styles['feature-grid-item']} ${styles['fg-1']}`}>
        <div className={`${styles['feature-grid-info']} z-20`}>
          <div className={`${styles['feature-grid-info--sub']} h6 success-color`}>The most followed cat</div>
          <h3 className="h3">NALA</h3>
          <div className={`h6 dark-color`}>Read More</div>
        </div>
        <Image
          src="https://placekitten.com/g/600/600"
          alt="Category 1"
          className={`${styles['feature-grid-image']} ${styles['feature-grid-image--1']} z-10`}
          priority
          fill
          sizes="
            (max-width: 693px) 100vw, 
            (max-width: 1023px) 50vw,
            33vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <div className={`${styles['feature-grid-item']} ${styles['fg-2']}`}>
        <div className={`${styles['feature-grid-info']} z-20`}>
          <div className={`${styles['feature-grid-info--sub']} h6 success-color`}>The toilet-using cat</div>
          <h3 className="h3">MR JINX</h3>
          <div className={`h6 dark-color`}>Read More</div>
        </div>
        <Image
          src="https://placekitten.com/g/600/601"
          alt="Category 2"
          className={`${styles['feature-grid-image']} ${styles['feature-grid-image--2']}`}
          priority
          fill
          sizes="
            (max-width: 693px) 100vw, 
            (max-width: 1023px) 50vw,
            66vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <div className={`${styles['feature-grid-item']} ${styles['fg-3']}`}>
        <div className={`${styles['feature-grid-info']} z-20`}>
          <div className={`${styles['feature-grid-info--sub']} h6 success-color`}>The magical maine coons</div>
          <h3 className="h3">MRS NORRIS</h3>
          <div className={`h6 dark-color`}>Read More</div>
        </div>
        <Image
          src="https://placekitten.com/g/601/627"
          alt="Category 3"
          className={`${styles['feature-grid-image']} ${styles['feature-grid-image--3']}`}
          priority
          fill
          sizes="
            (max-width: 693px) 100vw,  
            (max-width: 1023px) 50vw,
            33vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
      <div className={`${styles['feature-grid-item']} ${styles['fg-4']}`}>
        <div className={`${styles['feature-grid-info']} z-20`}>
          <div className={`${styles['feature-grid-info--sub']} h6 success-color`}>The hipster cat</div>
          <h3 className="h3">HAMILTON</h3>
          <div className={`h6 dark-color`}>Read More</div>
        </div>
        <Image
          src="https://placekitten.com/g/611/620"
          alt="Category 4"
          className={`${styles['feature-grid-image']} ${styles['feature-grid-image--4']}`}
          priority
          fill
          sizes="
            (max-width: 693px) 100vw,  
            (max-width: 1023px) 100vw,
            33vw"
          style={{
            objectFit: "cover"
          }} />
      </div>
    </div>
  );
}

export default HeroGrid;