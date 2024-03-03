import styles from '@/components/Services/services.module.css'

const HeroBlock: React.FC<{ image: JSX.Element, title: string, description: string }> = ({image,title,description}) => {
  return (
    <div className={`${styles['hero-block']} text-center basis-1/3`}>
          <div className={`${styles['image']}`}>{image}</div>
          <h3 className='h3'>{title}</h3>
          <p className='paragraph'>{description}</p>
    </div>
  );
}

export default HeroBlock;