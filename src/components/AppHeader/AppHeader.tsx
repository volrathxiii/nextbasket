import Link from '@mui/material/Button';
import { Icon } from '@mui/material';
import FacebookIcon from '@/components/Icons/facebook'
import InstagramIcon from '@/components/Icons/instagram'
import TwitterIcon from '@/components/Icons/twitter'
import YoutubeIcon from '@/components/Icons/youtube'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import AppBar from '@/components/AppHeader/AppBar';
import styles from './appHeader.module.css'

const AppHeader = () => {
  return (
    <div>
      <div className="nav-flexbar-stack z-10 hidden lg:flex w-full">
        <div className="block mx-auto container max-w-screen-xl w-full">
          <div className="nav-flexbar flex flex-row flex-nowrap items-center justify-between">
            <div>
              <Link sx={{color:'#fff'}}>
                <LocalPhoneOutlinedIcon color="inherit" />
                <span className='text--small'> +63 (917) 894-2849</span>
              </Link>
              <Link sx={{color:'#fff'}}>
                <MailOutlinedIcon color="inherit" />
                <span className='text--small'> patrick.taguinod.rivera@gmail.com</span>
              </Link>
            </div>
            <div className="grow text-center"><p>Follow US and get a chance to win 80% off</p></div>
            <div className="grow text-right"><p>Follow Us:
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
            </p></div>
          </div>
        </div>
      </div>

      <AppBar />
    </div>
  );
}

export default AppHeader;