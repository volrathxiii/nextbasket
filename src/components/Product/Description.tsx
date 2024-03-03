import Image from 'next/image';
import styles from '@/components/Product/products.module.css'

const ProductDescription:React.FC<{ image: string, title: string, description: string }> = ({image,title,description}) => {
  return (
    <div className={`hidden ${styles['product-description--desktop']}`}>
      <div className={`flex flex-row justify-between ${styles['product-description-header']}`}>
        <div className='link'>Description</div>
        <div className='link'>Additional Information</div>
        <div className='link'>Reviews <span className='success-color'>(0)</span></div>
      </div>
      <div className={`border-top-light ${styles['product-description-details']} flex flex-row gap-4`}>
        <div className='flex flex-col gap-4'>
          <div className='h3'>{title}</div>
          <div className='flex flex-col gap-4'>
            <p className='paragraph'>{description}</p>
            <p className='paragraph qoute'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
            <p className='paragraph'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
          </div>
        </div>
        <div >
          <div className={`${styles['product-description-photo']}`}>
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit='cover'
          sizes="
            (max-width: 693px) 100vw, 
            (max-width: 1023px) 50vw,
            66vw"
          priority
        />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;