import Hero from '../components/home/Hero';
import Footer from '../components/home/Footer';
import AboutUs from '../components/home/AboutUs';

import Services from '../components/home/Services';
import Navbar from '../components/home/Navbar';

import ServiceReview from '../components/home/ServiceReview';

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
