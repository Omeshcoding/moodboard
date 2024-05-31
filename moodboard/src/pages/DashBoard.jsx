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
    'Dashboard',
    'Planground',
    'Vendors',
    'Messages',
    'Contact',
    // eslint-disable-next-line react/jsx-key
    <SquareUserRound size={32} />,
  ];
  return (
    <section className="bg-gradient-to-tr  to-red-800 from-[#DC897C] self-stretch  h-[100%]">
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
