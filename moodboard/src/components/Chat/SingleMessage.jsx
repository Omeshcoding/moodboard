/* eslint-disable react/prop-types */
const SingleMessage = ({ title, desc, time, notification }) => {
  return (
    <div className="relative flex justify-center  sm:justify-between  p-6 bg-white text-gray-500 my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-4 hover:bg-[#DBDDE1]">
      <div className="flex flex-wrap  justify-center sm:justify-start items-center">
        <img
          src="/Avatar.png"
          height={100}
          width={108}
          alt="profileimage"
          className=" rounded-full border-2 border-darkerGray"
        />
        <div className="text-center sm:text-left sm:ml-4 text-[16px] text-darkGray">
          <p className="text-xl text-black font-bold mb-2">{title}</p>
          <p className="">{desc}</p>
        </div>
      </div>
      <div className="flex flex-col h-20">
        {notification > 0 && (
          <p className="   w-8 h-8 text-center pt-1 mx-auto my-2   bg-[#FF3742] text-white rounded-full">
            {notification}
          </p>
        )}

        <p className=" py-1 px-4 rounded-sm flex flex-end items-end gap-1 text-darkerGray">
          {time}
        </p>
      </div>
    </div>
  );
};

export default SingleMessage;
