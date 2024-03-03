import styles from '@/components/Testimonial/testimonial.module.css'
import { Rating } from "@mui/material";
import Image from "next/image";

const TestimonialFeatured = () => {
  return (
    <div className="container container--tall container--sm w-full items-center justify-between text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center justify-between">
        <div className="flex flex-col gap-5 p-2.5 ">
          <div className={`${styles['testimonial-info']} items-center justify-between text-center flex flex-col gap-5 p-2.5`}>
            <h3 className="h3 text-center">What they say about us</h3>
            <div className={`background-secondary ${styles['avatar']}`}>
              <Image
                src="https://placekitten.com/g/100/100"
                alt="Regina Miles"
                priority
                fill
                sizes="
                (max-width: 693px) 100vw, 
                (max-width: 1023px) 50vw,
                66vw"
                style={{
                  borderRadius: "45px",
                  objectFit: "cover"
                }} />
            </div>
            <div><Rating name="half-rating-read" defaultValue={4.3} precision={0.5} readOnly /></div>
            <div className="h6">Slate helps you see how many more days you need to work to reach your financial goal.</div>
            <div>
              <div className='link primary-color'>Regina Miles</div>
              <div className='h6 dark-color'>Designer</div>
            </div>
          </div>
        </div>
        <div className={`image-grid grid grid-cols-3 gap-5`}>
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/150"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/151"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/152"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/153"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/154"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/155"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/156"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/158"
              alt="Testimonial"
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
          <div className={`background-secondary ${styles['image-grid']}`}>
            <Image
              src="https://placekitten.com/g/150/157"
              alt="Testimonial"
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
        </div>
      </div>
    </div>
  );
}

export default TestimonialFeatured;