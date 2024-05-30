import Navbar from '../src/components/home/Navbar';
import { SquareUserRound } from 'lucide-react';
import Overview from '../src/components/dashboard/Overview';
import ChannelCard from '../src/components/dashboard/ChannelCard';
import VendorDirectory from '../src/components/dashboard/VendorDirectory';
import RitualsInfo from '../src/components/dashboard/RitualsInfo';
import Moodboard from '../src/components/dashboard/Moodboard';
import Copyright from '../src/components/Copyright';

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
