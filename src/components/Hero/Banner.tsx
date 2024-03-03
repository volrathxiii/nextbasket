import styles from '@/components/Hero/hero.module.css'

import Button from '@mui/material/Button';

const HeroBanner = () => {
  return (
    <div className={`${styles['full-width-banner']} flex flex-col items-center justify-between text-center`}>

      <div className="container container--tall container--sm w-full items-center justify-between text-sm">
        <div className="grid grid-cols-1 gap-5 items-center justify-between">
          <div className="flex flex-col gap-5 p-2.5 ">
            <div className={`items-center justify-between text-center flex flex-col gap-5 p-2.5 ${styles['banner-details']}`}>
              <div className='h6 primary-color'>Designing Better Experience</div>
              <h3 className="h3 text-center">When a girl scout beams with joy, a Christmas Ale self-flagellates</h3>
              <div className="paragraph">Sometimes a Fraoch Heather Ale goes to sleep, but a twisted bud dry always lazily goes deep sea fishing with the Imperial Stout! </div>
              <div className='h3 secondary-color'>$16.48</div>
              <Button variant="contained" color='primary'>ADD YOUR CALL TO ACTION</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;