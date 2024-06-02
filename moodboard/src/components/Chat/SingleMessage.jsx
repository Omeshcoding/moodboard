/* eslint-disable react/prop-types */
const SingleMessage = ({ title, desc, time, notification }) => {
  return (
    <div className="relative flex     px-1 lg:px-2 py-4 bg-white text-gray-500 hover:text-black my-2 md:my-4 rounded-md sm:items-center flex-wrap gap-2 hover:bg-[#DBDDE1]">
      <div className="flex flex-wrap  justify-start w-[50px] items-center">
        <img
          src="/Avatar.png"
          height={80}
          width={70}
          alt="profileimage"
          className="w-[100%] md:w-16 rounded-full border-2 border-darkerGray"
        />
      </div>
      <div className="text-left text-wrap sm:ml-4 md:text-[16px] text-darkGray text-[11px] max-w-[60%]">
        <p className=" md:text-xl text-black font-bold mb-2">{title}</p>
        <p className="">{desc}</p>
      </div>
      <div className="relative flex flex-col w-14 ml-auto  ">
        {notification > 0 && (
          <p className=" absolute -top-6 right-2  w-6 h-6  text-[11px] pt-1 mx-auto mb-2    bg-[#FF3742] text-white rounded-full">
            {notification}
          </p>
        )}

        <p
          className={`py-1 px-1 rounded-sm gap-1 flex items-end text-darkerGray max-sm:text-[11px]  `}
        >
          {time}
        </p>
      </div>
    </div>
  );
};

export default SingleMessage;
