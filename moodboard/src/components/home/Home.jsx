import Hero from './Hero';
import Footer from './Footer';
import AboutUs from './AboutUs';

import Services from './Services';
import Navbar from './Navbar';

import ServiceReview from './ServiceReview';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <ServiceReview />
      <Footer />
    </>
  );
};

export default Home;
