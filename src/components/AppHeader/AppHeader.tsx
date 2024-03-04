
import Link from 'next/link';
import { Icon } from '@mui/material';
import FacebookIcon from '@/components/Icons/facebook'
import InstagramIcon from '@/components/Icons/instagram'
import TwitterIcon from '@/components/Icons/twitter'
import YoutubeIcon from '@/components/Icons/youtube'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AppBar from '@/components/AppHeader/AppBar';
import styles from '@/components/AppHeader/appHeader.module.css'

const AppHeader = () => {
  return (
    <div>
      <div className={`${styles['nav-flexbar-stack']} hidden lg:flex w-full`}>
        <div className="block mx-auto container container--md w-full">
          <div className={`${styles['nav-flexbar']} flex flex-row flex-nowrap items-center justify-between`}>
            <div className={`${styles['announce-contact']} flex flex-col gap-1`}>
              <Link href="/" className='flex items-center'>
                <LocalPhoneOutlinedIcon color="inherit" fontSize='inherit' />
                <span className='text--small'> +63 (917) 894-2849</span>
              </Link>
              <Link href="/" className='flex items-center'>
                <MailOutlinedIcon color="inherit" fontSize='inherit' />
                <span className='text--small'> patrick.taguinod.rivera@gmail.com</span>
              </Link>
            </div>
            <div className="grow text-center"><p>Follow US and get a chance to win 80% off</p></div>
            <div className="text-right flex items-center"><p>Follow Us:</p>
              <a href="#" className={`${styles['icon-button']}`}>
                <Icon className='svg-white'>
                  <InstagramIcon />
                </Icon>
              </a>
              <a href="#" className={`${styles['icon-button']}`}>
                <Icon className='svg-white'>
                  <YoutubeIcon />
                </Icon>
              </a>
              <a href="#" className={`${styles['icon-button']}`}>
                <Icon className='svg-white'>
                  <FacebookIcon />
                </Icon>
              </a>
              <a href="#" className={`${styles['icon-button']}`}>
                <Icon className='svg-white'>
                  <TwitterIcon />
                </Icon>
              </a>
            </div>
          </div>
        </div>
      </div>

      <AppBar />
    </div>
  );
}

export default AppHeader;