import Link from '@mui/material/Button';
import { Icon } from '@mui/material';
import FacebookIcon from '@/components/Icons/facebook'
import InstagramIcon from '@/components/Icons/instagram'
import TwitterIcon from '@/components/Icons/twitter'
import YoutubeIcon from '@/components/Icons/youtube'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import CartDrawer from '@/components/Cart/Drawer';
import FavoriteDrawer from '@/components/Favorites/Drawer';
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

      <div className="background-primary">
        <div className={`${styles['app-bar']} mx-auto container max-w-screen-xl w-full`}>
          <div className={`${styles['app-header']}`}>
            <div className={`h3 logo`}>Bandage</div>
            <div className={`${styles['nav-toggler']}`}>Menu</div>
          </div>
          <nav className={`${styles['nav-bar']}`}>
            <ul className={`${styles['nav-group']} ${styles['nav-group--menu']}`}>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='/' className={`${styles['nav-item-menu']}`}>Home</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='#' className={`${styles['nav-item-menu']}`}>Shop</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='#' className={`${styles['nav-item-menu']}`}>About</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='#' className={`${styles['nav-item-menu']}`}>Blog</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='#' className={`${styles['nav-item-menu']}`}>Contact</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} href='#' className={`${styles['nav-item-menu']}`}>Pages</Link></li>
            </ul>
            <ul className={`${styles['nav-group']} ${styles['nav-group--tools']}`}>
              <li className={`${styles['nav-item']}`}>
                <Link href='#' sx={{ minWidth: 40, fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, fontWeight: 400 }} className={`${styles['nav-item-menu']}`}>
                  <PersonOutlineIcon sx={{ fontSize: { xs: 40, sm: 40, md: 18, lg: 18 } }} />Login/Register
                </Link>
              </li>
              <li className={`${styles['nav-item']}`}>
                <Link href='#' sx={{ minWidth: 40 }} className={`${styles['nav-item-menu']}`} aria-label='Search'>
                  <SearchIcon sx={{ fontSize: { xs: 40, sm: 40, md: 18, lg: 18 } }} /></Link>
              </li>
              <li className={`${styles['nav-item']}`}>
                <CartDrawer />
              </li>
              <li className={`${styles['nav-item']}`}>
                <FavoriteDrawer />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;