'use client';
import { useState, useEffect } from 'react'
import Link from '@mui/material/Button';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import CartDrawer from '@/components/Cart/Drawer';
import FavoriteDrawer from '@/components/Favorites/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './appHeader.module.css'

const AppBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileOpenClass, setMobileOpenClass] = useState(styles['mobile-menu--close'])

  useEffect(() => {
    if(mobileOpen) {
      setMobileOpenClass(styles['mobile-menu--open'])
    } else {
      setMobileOpenClass(styles['mobile-menu--close'])
    }
}, [mobileOpen])

  function toggleMobileMenu() {
    if(mobileOpen) {
      setMobileOpen(false)
    } else {
      setMobileOpen(true)
    }
  }

  return (
  <div className="background-primary">
        <div className={`${styles['app-bar']} mx-auto container container--sm w-full`}>
          <div className={`${styles['app-header']}`}>
            <div><Link href='/' ><span className={`h3 logo`}>Bandage</span></Link></div>
          </div>
          <nav className={`${styles['nav-bar']} ${styles['mobile-menu']} ${mobileOpenClass}`}>
            <ul className={`${styles['nav-group']} ${styles['nav-group--menu']}`}>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='/' className={`${styles['nav-item-menu']}`}>Home</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='#' className={`${styles['nav-item-menu']}`}>Shop</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='#' className={`${styles['nav-item-menu']}`}>About</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='#' className={`${styles['nav-item-menu']}`}>Blog</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='#' className={`${styles['nav-item-menu']}`}>Contact</Link></li>
              <li className={`${styles['nav-item']}`}><Link color='info' sx={{ fontSize: { xs: 30, sm: 30, md: 14, lg: 14 }, }} href='#' className={`${styles['nav-item-menu']}`}>Pages</Link></li>
          </ul>
          </nav>
          <nav className={`${styles['nav-bar--tools']}`}>
          <ul className={`${styles['nav-group']} ${styles['nav-group--tools']}`}>
              <li className={`${styles['nav-item-tool']} ${styles['desktop-only']}`}>
                <Link href='#' sx={{ minWidth: 40, fontSize: { xs: 14, sm: 14, md: 14, lg: 14 } }} className={`${styles['nav-item-menu']}`}>
                  <PersonOutlineIcon sx={{ fontSize: { xs: 24, sm: 24, md: 18, lg: 18 } }}/>Login/Register
                </Link>
              </li>
              <li className={`${styles['nav-item-tool']} ${styles['desktop-only']}`}>
                <Link href='#' sx={{ minWidth: 40 }} className={`${styles['nav-item-menu']}`} aria-label='Search'>
                  <SearchIcon sx={{ fontSize: { xs: 24, sm: 24, md: 18, lg: 18 } }}/></Link>
              </li>
              <li className={`${styles['nav-item-tool']}`}>
                <CartDrawer />
              </li>
              <li className={`${styles['nav-item-tool']}`}>
                <FavoriteDrawer />
              </li>
              <li className={`${styles['nav-item-tool']} ${styles['nav-toggler']}`}>
              <Link href='#' onClick={()=>toggleMobileMenu()} sx={{ minWidth: 40 }} className={`${styles['nav-item-menu']}`} aria-label='Menu'>
                <MenuIcon sx={{ fontSize: { xs: 24, sm: 24, md: 18, lg: 18 } }}/>
                </Link>
                </li>
                
            </ul>
            </nav>
        </div>
      </div>
  )
}

export default AppBar;