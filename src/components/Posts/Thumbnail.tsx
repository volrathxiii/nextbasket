import styles from '@/components/Posts/posts.module.css'
import Link from 'next/link';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PostsThumbnail: React.FC<{ image: JSX.Element, title: string, description: string }> = ({ image, title, description }) => {
  return (
    <div className={`${styles['post-thumbnail']} text-center flex-grow`}>
      <div className={`${styles['image']}`}>{image}</div>
      <div className={`${styles['post-thumbnail-detail']}`}>
        <div className={`text--small`}><span className='primary-color'>Google</span> Tranding New</div>
        <h4 className='h4'>{title}</h4>
        <p className={`${styles['post-thumbnail--description']} paragraph`}>{description}</p>
        <div className={`${styles['post-thumbnail--meta']} paragraph`}>
          <div><span className='primary-color'><AccessAlarmIcon fontSize='inherit' color='inherit' /></span> 22 April 2021</div>
          <div className='text-right'><span className='success-color'><BarChartIcon fontSize='inherit' color='inherit' /></span> 10 comments</div>
        </div>
        <div>
          <Link className={`link-color`} href='#'>
            <b>Learn More</b>
            <span className={`primary-color`}>
              <ArrowForwardIosIcon fontSize='inherit' color='inherit' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostsThumbnail;