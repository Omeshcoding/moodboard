/* eslint-disable react/prop-types */

const PriestProfile = ({ chatType, name, imgUrl, type, messageType }) => {
  console.log(chatType);
  return (
    <div
      value={chatType}
      className={`flex flex-wrap  justify-center sm:justify-start items-center my-10 mx-auto h-auto  w-[80%] gap-2 ${
        chatType.type === type ? 'bg-[#fff]' : 'bg-[#FDF0D5]'
      }  text-[#770C15] rounded-lg px-4 cursor-pointer`}
      onClick={() => messageType({ type: type, name: name, imgUrl: imgUrl })}
    >
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
