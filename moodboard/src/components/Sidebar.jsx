/* eslint-disable react/prop-types */
import { X, CircleChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({ title, tags, boards, show }) => {
  return (
    <aside
      className={`max-md:fixed  w-[60%] md:w-[30%] h-[100vh] overflow-y-scroll pt-8   flex-col gap-8 text-white bg-white ${
        show ? 'translate-x-0 fixed' : 'max-md:translate-x-[-100%]  block'
      } transition-all duration-300 z-40`}
    >
      <div className="bg-white  flex items-center py-1 mb-4 gap-4 w-full px-2">
        <Link to="/dashboard" className="text-xl">
          <X color="gray" />{' '}
        </Link>
        <p className="text-gray-500  w-[80%] pl-2 font-semibold text-sm md:text-lg">
          {title}
        </p>
      </div>
      <div className="w-full flex flex-col items-center pt-10 bg-[#770C15] lg:h-full">
        <input
          type="text"
          placeholder="Search"
          className="mx-auto w-[80%] h-12 text-lg border-2 border-[#E9EAED] rounded-full px-8"
        />
        <div className=" flex flex-nowrap w-full pl-8   overflow-x-scroll items-center gap-4 mt-4 h-20">
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
        <div className=" flex flex-wrap  gap-8 mt-10 ml-10">
          {boards.map((item, index) => (
            <div key={index} className="flex-">
              <div className="rounded-lg bg-[#FDF0D5] w-28 h-24 md:w-40 md:h-36"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
