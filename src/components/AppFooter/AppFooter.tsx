import { Icon, TextField, Button, FormGroup } from '@mui/material';
import FacebookIcon from '@/components/Icons/facebook'
import InstagramIcon from '@/components/Icons/instagram'
import TwitterIcon from '@/components/Icons/twitter'
import YoutubeIcon from '@/components/Icons/youtube'
import stylesIcon from '@/components/AppHeader/appHeader.module.css'

const AppFooter = () => {
  return (
    <div>
      <div className='flex flex-col background-primary'>
        <div className="block mx-auto container container--sm w-full">
          <div className="flex flex-col items-left justify-between py-10 sm:flex-row sm:items-center">
            <div className={`h3 logo p-2`}>Bandage</div>
            <div>
              <a href="#" className={`${stylesIcon['icon-button']}`}>
                <Icon className='svg-blue'>
                  <InstagramIcon />
                </Icon>
              </a>
              <a href="#" className={`${stylesIcon['icon-button']}`}>
                <Icon className='svg-blue'>
                  <YoutubeIcon />
                </Icon>
              </a>
              <a href="#" className={`${stylesIcon['icon-button']}`}>
                <Icon className='svg-blue'>
                  <FacebookIcon />
                </Icon>
              </a>
              <a href="#" className={`${stylesIcon['icon-button']}`}>
                <Icon className='svg-blue'>
                  <TwitterIcon />
                </Icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col background-primary '>
        <div className="block mx-auto container container--sm w-full">
          <div className="flex flex-col gap-8 items-left justify-between py-10 sm:flex-row border-top-light">
            <div className="flex flex-col gap-2.5">
              <div className={`h5`}>Company Info</div>
              <div className='link'>About Us</div>
              <div className='link'>Carrier</div>
              <div className='link'>We are hiring</div>
              <div className='link'>Blog</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className={`h5`}>Legal</div>
              <div className='link'>About Us</div>
              <div className='link'>Carrier</div>
              <div className='link'>We are hiring</div>
              <div className='link'>Blog</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className={`h5`}>Features</div>
              <div className='link'>User Analytics</div>
              <div className='link'>Business Marketing</div>
              <div className='link'>Live Chat</div>
              <div className='link'>Unlimited Support</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className={`h5`}>Resources</div>
              <div className='link'>iOS & Android</div>
              <div className='link'>Watch a Demo</div>
              <div className='link'>Customer</div>
              <div className='link'>API</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className={`h5`}>Get in Touch</div>
              <div className='link'>
                <FormGroup row>
                <TextField id="outlined-basic" label="Your Email" variant="outlined" size='small' /><Button size='small' variant='contained'>Subscribe</Button>
                </FormGroup>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col background-secondary'>
        <div className="block mx-auto container container--sm w-full ">
          <div className='h6 py-7'>Made With Love By Finland All Right Reserved </div>
        </div>
      </div>
    </div>
  );
}

export default AppFooter;