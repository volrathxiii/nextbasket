import { Icon, TextField, Button, FormGroup } from '@mui/material';
import FacebookIcon from '@/components/Icons/facebook'
import InstagramIcon from '@/components/Icons/instagram'
import TwitterIcon from '@/components/Icons/twitter'
import YoutubeIcon from '@/components/Icons/youtube'
import stylesIcon from '@/components/AppHeader/appHeader.module.css'

import styles from '@/components/Product/products.module.css'

const ProductDescription = () => {
  return (
    <div>
      <div className={`flex flex-row justify-between ${styles['product-description-header']}`}>
        <div className='link'>Description</div>
        <div className='link'>Additional Information</div>
        <div className='link'>Reviews <span className='success-color'>(0)</span></div>
      </div>
      <div>
        <div>
          <div>title</div>
          <div>description details</div>
        </div>
        <div>
          image
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;