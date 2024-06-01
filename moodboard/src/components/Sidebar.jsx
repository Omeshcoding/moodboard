/* eslint-disable react/prop-types */
import { X, CircleChevronRight } from 'lucide-react';

const Sidebar = ({ title, tags, boards }) => {
  return (
    <aside className="absolute shadow-lg w-[30%] h-[100vh] overflow-y-scroll pt-8  flex flex-col  gap-8 text-white bg-white">
      <div className=" flex items-center py-1 h-1 gap-4 w-full px-2">
        <span className="">
          <X color="gray" size="2rem" />{' '}
        </span>
        <p className="text-gray-500 bg-white w-[80%] pl-2 font-semibold text-lg">
          {title}
        </p>
      </div>
      <div className="w-full flex flex-col items-center pt-10 bg-[#770C15] h-full">
        <input
          type="text"
          placeholder="Search"
          className="mx-auto w-[80%] h-14 text-lg border-2 border-[#E9EAED] rounded-full px-8"
        />
        <ul className="flex items-center gap-4 mt-4 ">
          {tags.map((item, index) => (
            <li
              key={index}
              className="bg-[#FDF0D5] text-[#747881] rounded-3xl px-3 text-sm py-1"
            >
              {item}{' '}
            </li>
          ))}
          <span className="ml-1">
            <CircleChevronRight />{' '}
          </span>
        </ul>
        <div className=" flex flex-wrap  gap-8 mt-10 ml-10">
          {boards.map((item, index) => (
            <div key={index} className="flex-">
              <div className="rounded-lg bg-[#FDF0D5] w-40 h-36"></div>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
