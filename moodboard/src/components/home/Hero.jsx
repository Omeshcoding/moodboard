import { Link } from 'react-router-dom';
import useSmoothScroll from '../../hooks/useSmoothScroll';

const Hero = () => {
  useSmoothScroll();
  return (
    <>
      <section
        id="home"
        className="flex flex-col-reverse gap-4 lg:gap-10  md:flex-row px-1 sm:pl-4 lg:pl-20  h-[800px]  text-left  items-center  sm:mt-24 md:mt-0"
      >
        <div className="flex flex-col gap-10 lg:gap-16 md:w-[40%] md:mt-10 pl-14 pr-4 md:pl-0">
          <h1 className=" xl:text-6xl  font-bold text-primary  xl:leading-[75px] max-md:max-w-full text-4xl  md:text-5xl md:leading-[63px] max-w-[500px] lg:max-w-[600px] max-sm:leading-[50px] ">
            Plan Your <br></br>{' '}
            <span className="relative text-red-900 z-20">
              {' '}
              Dream Wedding
              <small className="absolute bg-red-400/20 left-0 bottom-[4px]  z-0 h-4 w-full" />
            </span>{' '}
            With Us
          </h1>
          <p>
            At SubhMangalPlanning, we believe every wedding should be as unique
            and special as the love story it celebrates. Creating Memorable
            Moments, One Celebration at a Time. All Powered by AI and LLM
          </p>

          <Link to="/onboarding" className="relative">
            <button
              type="button"
              className="relative z-20 bg-red-900 text-secondary-2 px-4 py-2 w-36 "
            >
              Visit Our Site
            </button>
            <span>
              {' '}
              <img
                src="/polygon-tri.png"
                alt=""
                className="absolute -bottom-6 -left-2 w-40 z-0 hover:scale-105 transition-all duration-300"
              />
            </span>
          </Link>
        </div>
        <div className="flex flex-col ml-5 w-[60%] max-md:ml-0 max-md:w-full order-1">
          <div className="w-[100%] mx-auto h-full ">
            <img
              height={1000}
              src="/hero.png"
              width={1000}
              loading="lazy"
              alt="hero-img"
              className="bg-cover w-full h-[100%]  "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
