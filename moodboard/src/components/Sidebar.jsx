/* eslint-disable react/prop-types */
import { CircleChevronRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ title, tags, boards, show }) => {
  return (
    <aside
      className={` fixed  w-[60%] md:w-[30%] h-[100%] overflow-y-scroll  flex-col gap-8 text-white z-40 bg-[#770C15]  ${
        show ? 'translate-x-0 fixed' : 'max-md:translate-x-[-100%]  block'
      } transition-all duration-300 max-md:z-40`}
    >
      <div className="bg-white  flex items-center py-6 mb-4 gap-4 w-full px-2">
        <Link to="/dashboard" className="text-xl">
          <ArrowLeft color="gray" />{' '}
        </Link>
        <p className="text-gray-500  w-[80%] pl-2 font-semibold text-sm md:text-lg">
          {title}
        </p>
      </div>
      <div className="pr-2 w-full flex flex-col items-center pt-10 bg-[#770C15] lg:h-full">
        <input
          type="text"
          placeholder="Search"
          className="mx-auto w-[90%] h-10 text-lg border-2 border-[#E9EAED] rounded-full px-8"
        />
        <div className=" flex flex-nowrap w-full pl-8   overflow-x-scroll items-center gap-4 mt-4 h-20 py-6">
          {tags.map((item, index) => (
            <div
              key={index}
              className="bg-[#FDF0D5] text-[#747881]  rounded-3xl px-3 text-sm py-1"
            >
              {item}{' '}
            </div>
          ))}
          <span className="ml-1 ">
            <CircleChevronRight />{' '}
          </span>
        </div>
        <div className=" flex flex-wrap  gap-8 mt-10 ml-10 pb-28">
          {boards.map((item, index) => (
            <div key={index} className="flex-">
              {/* <div className="rounded-lg bg-[#FDF0D5] w-28 h-24 md:w-40 md:h-36"></div> */}
              <div className="  flex flex-col w-28 h-24 md:w-40 md:h-36  justify-center  items-center px-4 py-2 ">
                <img
                  src={item.imgUrl}
                  height={800}
                  width={400}
                  alt="profileimage"
                  className="mb-4"
                />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
