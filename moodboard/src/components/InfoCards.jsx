import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const InfoCards = ({ title, tag, desc, imgUrl }) => {
  return (
    <section className="max-xl:w-[90%] xl:w-[70%] mx-auto  my-20 py-10 max-lg:px-4 lg:pl-8 shadow-sm  drop-shadow-md  rounded-md bg-gradient-to-tr to-red-800 from-[#DC897C] self-stretch h-auto flex max-md:flex-col">
      <div className="flex flex-col gap-28 text-white max-md:mt-8 text-md w-full lg:w-[55%] max-md:order-2">
        <div className="">
          <p className="text-2xl mb-4 font-bold">{title}</p>
          <p>{tag}</p>
        </div>
        <p>{desc}</p>
        <Link
          to="/ritualsai"
          className="btn px-6 py-[6px] w-[150px] max-md:mx-auto"
        >
          <button>Try it Now</button>
        </Link>
      </div>
      <div className="flex flex-col justify-center mx-5 w-[45%] max-md:ml-0 max-md:w-full order-1">
        <div className="w-[100%] mx-auto h-full ">
          <img
            height={1000}
            src={imgUrl}
            width={1000}
            alt="hero-img"
            className="bg-cover w-[100%] lg:w-[600px] h-[100%]  "
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
