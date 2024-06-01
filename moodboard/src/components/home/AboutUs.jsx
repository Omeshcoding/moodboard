import useSmoothScroll from '../../hooks/useSmoothScroll';

const AboutUs = () => {
  useSmoothScroll();

  return (
    <section
      id="aboutus"
      className="bg-gradient-to-bl to-red-800 from-white self-stretch py-20 xl:pl-20 mt-20 w-full max-md:px-2 max-md:mt-10 max-md:max-w-full
   "
    >
      <div className="flex  max-md:flex-col max-md:gap-0 max-md:items-center ">
        <div className="flex  flex-col max-w-[574.27px] h-[693px] max-md:ml-0 max-md:w-full max-md:order-2 z-30">
          <div className="flex flex-col grow px-12 py-20 mt-1.5 w-full text-center shadow-lg max-md:px-5 max-md:mt-10 max-md:max-w-full bg-white h-[693px]">
            <h3 className="self-center mt-14 text-4xl font-bold text-900 capitalize max-md:mt-10 text-red-900 ">
              {' '}
              About our wedding Planning Services{' '}
            </h3>
            <div className="mt-20 text-base h-auto md:leading-10 sm:leading-8 text-neutral-700 max-md:mt-10 max-md:max-w-full">
              SubhMangalPlanning is committed to delivering exceptional wedding
              planning services tailored to your needs. From venue selection and
              decor to vendor management and coordination, we handle every
              detail with care and expertise. Trust us to bring your wedding
              vision to life with creativity, dedication, and impeccable
              service. Enjoy stress-free planning with our comprehensive vendor
              management system, ensuring all your service providers are on the
              same page and deliver on time.
            </div>
          </div>
        </div>
        <div className="flex relative   w-[950px] ml-auto max-md:ml-0 max-md:w-full h-[500px] md:h-[700px] py-6 overflow-hidden">
          <img
            loading="lazy"
            src="/aboutus2.png"
            alt="ext_51 image"
            className="absolute left-0 w-[300px] lg:w-[400px] h-full md:h-[612px] object-cover aspect-[1.47] max-md:mt-10 max-md:max-w-full   z-30 hover:z-60 hover:scale-105 hover:md:w-[500px] transition-all duration-300"
            width={880}
            height={180}
          />
          <img
            loading="lazy"
            src="/aboutus3.png"
            alt="ext_51 image"
            className="absolute w-[300px] lg:w-[367px] h-full  md:h-[570px] object-cover right-36  max-md:bottom-[-12px]  md:right-[18.5rem] py-2 z-20 aspect-[1.47] max-md:mt-10 max-md:max-w-full hover:z-50 hover:scale-105 transition-all duration-300"
            width={180}
            height={180}
          />
          <img
            loading="lazy"
            src="/aboutus1.png"
            alt="ext_51 image"
            className="absolute right-2 -[300px] lg:w-[367px] h-full  md:h-[528px] object-cover z-10 max-md:bottom-0 py-4   aspect-video max-md:mt-10 max-md:max-w-full hover:z-50 hover:scale-105 transition-all duration-300"
            width={180}
            height={180}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
