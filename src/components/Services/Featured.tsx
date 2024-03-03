import HeroBlock from "@/components/Services/HeroBlock";
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const ServicesFeatured = () => {
  return (
    <div className="container container--tall container--sm w-full items-center justify-between text-sm">
      <div className="container-title flex flex-col flex-wrap gap-3">
        <h4 className="h4 text-center">Featured Services</h4>
        <h3 className="h3 text-center">THE BEST SERVICES</h3>
        <p className="paragraph text-center">The reasons why you should be with us</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-8">
        <HeroBlock image={<LocalLibraryIcon fontSize="inherit" color="primary" />} title='Easy Wins' description="Get your best looking smile now!" />
        <HeroBlock image={<MenuBookIcon fontSize="inherit" color="primary" />} title='Concrete' description="Defalcate is most focused in helping you discover your most beautiful smile" />
        <HeroBlock image={<TrendingUpIcon fontSize="inherit" color="primary" />} title='Hack Growth' description="Overcame any hurdle or any other problem." />
      </div>
    </div>
  );
}

export default ServicesFeatured;