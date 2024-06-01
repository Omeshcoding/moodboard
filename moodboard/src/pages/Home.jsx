import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';
import AboutUs from '../components/home/AboutUs';

import Services from '../components/home/Services';
import Navbar from '../components/home/Navbar';

import ServiceReview from '../components/home/ServiceReview';

const Home = () => {
  const navlinks = [
    {
      name: 'HOME',
      link: '/#home',
    },
    {
      name: 'ABOUT US',
      link: '/#aboutus',
    },
    {
      name: 'SERVICES',
      link: '/#services',
    },
    {
      name: 'GALLERY',
      link: '/#reviews',
    },
    {
      name: 'Contact',
      link: '/#footer',
    },
  ];

  return (
    <main className="overflow-hidden">
      <Navbar navlinks={navlinks} />
      <Hero />
      <AboutUs />
      <Services />
      <ServiceReview />
      <Footer />
    </main>
  );
};

export default Home;
