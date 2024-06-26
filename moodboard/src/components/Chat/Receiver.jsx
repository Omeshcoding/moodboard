/* eslint-disable react/prop-types */
const Receiver = ({
  imgUrl,
  userImg,
  message,
  caption,
  senderImg,
  senderProfileImg,
  timeStyle,
}) => {
  return (
    <div className="flex gap-4 w-[50%] text-left h-auto  px-6 py-2  pb-20">
      {userImg && (
        <div className="flex flex-wrap  justify-center sm:justify-start items-center w-20">
          <img
            src={userImg}
            height={80}
            width={70}
            alt="profileimage"
            className=" rounded-full border-2 border-darkerGray"
          />
        </div>
      )}
      <div>
        <div className=" bg-[#E9EAED] w-fit h-auto rounded-3xl  rounded-bl-sm">
          {imgUrl && (
            <div className="flex flex-wrap  justify-center sm:justify-start items-center ">
              <img
                src={imgUrl}
                height={80}
                width={70}
                alt="profileimage"
                className=" w-fit rounded-3xl mb-2 border-2 mr-2 border-darkerGray"
              />
            </div>
          )}
          {senderImg ? (
            <div className="flex ">
              <div>
                <img
                  src={senderImg}
                  height={80}
                  width={90}
                  alt="profileimage"
                  className=" w-30 rounded-3xl mb-2 border-2 mt-2 border-darkerGray"
                />
              </div>
              <div>
                <div className="flex  m-2 rounded-3xl h-auto rounded-br-sm bg-white">
                  {message && <p className="px-4 py-3">{message}</p>}
                </div>
                {caption && <p className="px-4 py-3 mt-2">{caption}</p>}
              </div>
              <div className="flex flex-wrap  justify-center sm:justify-start items-center ">
                <img
                  src={senderProfileImg}
                  height={80}
                  width={70}
                  alt="profileimage"
                  className=" w-fit rounded-3xl mb-2 border-2 mr-2 border-darkerGray"
                />
              </div>
            </div>
          ) : (
            <>{message && <p className="px-4 py-3">{message}</p>}</>
          )}
        </div>
        <p className={`${timeStyle ? 'text-black' : 'text-[#747881]'} `}>
          {' '}
          <span className="font-bold mt-1">
            {!timeStyle && ' Moon Boots'}
          </span>{' '}
          9:02 PM
        </p>
      </div>
    </div>
  );
};

export default Receiver;
