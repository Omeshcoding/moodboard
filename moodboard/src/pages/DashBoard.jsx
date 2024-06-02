import Navbar from '../components/home/Navbar';
import { SquareUserRound } from 'lucide-react';
import Overview from '../components/dashboard/Overview';
import ChannelCard from '../components/dashboard/ChannelCard';
import VendorDirectory from '../components/dashboard/VendorDirectory';
import RitualsInfo from '../components/dashboard/RitualsInfo';
import Moodboard from '../components/dashboard/Moodboard';
import Copyright from '../components/Copyright';

const DashBoard = () => {
  const navlinks = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Planground',
      link: '/planground',
    },
    {
      name: 'InspireBoard',
      link: '/moodboard',
    },
    {
      name: 'Vendors',
      link: '/taskallocation',
    },
    {
      name: 'Messages',
      link: '/chat',
    },
    {
      name: 'Contact',
      link: '/integratewp',
    },
    {
      name: 'Home',
      link: '/',
    },
    {
      name: <SquareUserRound size={32} />,
      link: '/onboarding',
    },
  ];
  return (
    <section className="bg-gradient-to-t  to-red-800 from-[#DC897C] self-stretch  h-[100%] overflow-hidden">
      <Navbar navlinks={navlinks} />
      <Overview />
      <ChannelCard />
      <VendorDirectory />
      <RitualsInfo />
      <Moodboard />
      <Copyright />
    </section>
  );
};

export default DashBoard;
