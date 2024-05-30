import { Link } from 'react-router-dom';
import Rating from '../Rating';
import { Plus } from 'lucide-react';

const VendorDirectory = () => {
  const vendorData = [
    {
      title: 'Catering',
      vendorName: 'Delicious Catering',
      reviews: '100 Reviews',
      price: 'Starting at $50/person',
      link: '#',
    },
    {
      title: 'Photography',
      vendorName: 'Capture The Moment',
      reviews: '85 Reviews',
      price: 'Packages from $1,200',
      link: '#',
    },
    {
      title: 'Decor',
      vendorName: 'Elegant Decorations',
      reviews: '73 Reviews',
      price: 'Consultations from $200',
      link: '#',
    },
  ];

  return (
    <section className=" md:w-[70%] mx-auto mt-16 py-8 px-6  h-auto rounded-md mb-20">
      <div className="flex justify-between flex-wrap items-center mb-10 ">
        <p className="overview-title ">Vendor Directory</p>
        <button className="btn px-4  py-2 ">Add Vendor </button>
      </div>
      <div className="flex flex-wrap gap-8 w-full justify-center">
        {vendorData.map((item, index) => {
          return (
            <div
              className="relative bg-white gap-2 flex flex-col  drop-shadow-md max-md:w-[100%]  max-lg:w-[51%] w-[31%] px-4 py-6 rounded-md"
              key={index}
            >
              <p className="title font-bold">{item.title} </p>
              <p className="title font-bold">{item.vendorName} </p>
              <span className="absolute right-4 text-md text-[#171717]">
                <Plus strokeWidth={0.75} />
              </span>
              <div className="flex items-center gap-1 text-[#4B5563]">
                <Rating styles="text-lg" />
                <p className="text-md ">{item.reviews} </p>
              </div>
              <p className="text-md text-[#4B5563]">{item.price} </p>
              <Link to={item.link} className="text-sm text-[#2563EB]">
                View Profile{' '}
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default VendorDirectory;
