/* eslint-disable react/prop-types */
import { ArrowRight } from 'lucide-react/dist/cjs/lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ src, title, url }) => {
  return (
    <div className="flex flex-col w-[300px] max-md:ml-0 max-md:w-full text-center">
      <div className="flex flex-col justify-between grow items-center px-2 pt-2 pb-9 mx-auto w-full bg-white border-black border-solid shadow-lg border-[3px] max-md:mt-8 rounded-3xl">
        <div className="flex justify-center items-center self-stretch px-16 py-6 bg-red-900 rounded-tr-3xl rounded-tl-3xl max-md:px-5">
          {' '}
          <img
            loading="lazy"
            src={src}
            alt="ext_53 image"
            className=" aspect-square"
            width={128}
            height={128}
          />{' '}
        </div>
        <div className="mt-10 text-2xl font-bold text-center flex flex-wrap text-neutral-800 w-[200px]">
          {' '}
          {title}
        </div>
        <div className="flex  gap-1.5 mt-5 text-base font-extrabold uppercase text-neutral-800 items-center">
          <Link
            to={url}
            className="grow hover:underline flex items-center hover:gap-1 transition-all duration-300"
          >
            see more
            <ArrowRight className="w-4 h-4 " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
