import Hero from '../src/components/home/Hero';
import Footer from '../src/components/home/Footer';
import AboutUs from '../src/components/home/AboutUs';

import Services from '../src/components/home/Services';
import Navbar from '../src/components/home/Navbar';

import ServiceReview from '../src/components/home/ServiceReview';

const Home = () => {
  const navlinks = ['HOME', 'ABOUT US', 'SERVICES', 'GALLERY', 'CONTACT'];
  return (
    <>
      <Navbar navlinks={navlinks} />
      <Hero />
      <AboutUs />
      <Services />
      <ServiceReview />
      <Footer />
    </>
  );
};

export default Home;
