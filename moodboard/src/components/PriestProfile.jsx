/* eslint-disable react/prop-types */

const PriestProfile = ({ name, imgUrl }) => {
  return (
    <div className="flex flex-wrap  justify-center sm:justify-start items-center my-10 mx-auto h-auto  w-[80%] gap-2 bg-[#FDF0D5] text-[#770C15] rounded-lg px-4 ">
      <img
        src={imgUrl}
        height={80}
        width={70}
        alt="profileimage"
        className=" rounded-full border-2 border-darkerGray"
      />
      <p>{name} </p>
    </div>
  );
};

export default PriestProfile;
