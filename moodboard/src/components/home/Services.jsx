import { ArrowRight } from 'lucide-react';

import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Common Communication Channels',
    url: '/chat',
    image: '/Chat.png',
  },
  {
    title: 'Vendor Coordination And Management',
    url: '/',
    image: '/Food Cart.png',
  },
  {
    title: 'Task Scheduling Tools',
    url: '/taskallocation',
    image: '/Brief.png',
  },
  {
    title: 'Personalized Mood Boards',
    url: '/moodboard',
    image: '/Ballroom Dance.png',
  },
  {
    title: 'User-Friendly Interface',
    url: '/',
    image: '/support.png',
  },
  {
    title: 'E-Commerce Enabled Vendor Catalogue',
    url: '/',
    image: '/service.png',
  },
  {
    title: 'Astrology Bot',
    url: '/ritualsai',
    image: '/astro.png',
  },
  {
    title: 'Venue Theme Based Cloth Recommendation',
    url: '/',
    image: '/dress.png',
  },
];

const Services = () => {
  return (
    <section className=" mb-28">
      <div className="px-5 mt-28 w-full  max-md:mt-10 max-md:max-w-full ">
        <div className="flex justify-between my-8 md:mb-24  text-base md:p-14 lg:px-28 flex-col md:flex-row    text-neutral-800 items-start ">
          <h2 className="  font-extrabold text-primary  xl:leading-[75px] max-md:max-w-full text-4xl  md:text-5xl md:leading-[63px] max-w-[500px] lg:max-w-[600px] max-sm:leading-[50px]">
            What we serve to you <br></br> for your{' '}
            <span className="text-red-900">Best Wedding</span>
          </h2>
          <div className="max-w-[320px] md:max-w-[400px] font-normal ">
            <br></br>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              maxime nobis saepe eum dolorem.
            </p>
            <Link
              to="/"
              className="grow hover:underline flex items-center hover:gap-1 transition-all duration-300 uppercase mt-5 font-extrabold"
            >
              see more
              <ArrowRight className="w-4 h-4 " />
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 max-md:flex-col max-md:gap-0">
          {data.map((item, index) => {
            return (
              <ServiceCard
                src={item.image}
                key={index}
                title={item.title}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
