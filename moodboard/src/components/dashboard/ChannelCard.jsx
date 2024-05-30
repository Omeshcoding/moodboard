const ChannelCard = () => {
  const channelData = [
    {
      title: 'Common Channel ',
      desc: 'Private channel for organizers to communicate with vendors.',
    },
    {
      title: 'Couple-to-Organizer',
      desc: 'Private channel for couples to communicate with organizers.',
    },
    {
      title: 'Organizer-to-Vendor',
      desc: 'Private channel for organizers to communicate with vendors.',
    },
    {
      title: 'Couple-to-Guests',
      desc: 'Private channel for organizers to communicate with vendors.',
    },
  ];
  return (
    <section className=" md:w-[70%] mx-auto mt-16 py-8 px-6  h-auto rounded-md mb-20">
      <p className="overview-title mb-8">Channels</p>
      <div className="flex flex-wrap gap-8 w-full justify-center">
        {channelData.map((item, index) => {
          return (
            <div
              className="bg-white drop-shadow-md max-md:w-[100%] w-[48%] px-4 py-6 rounded-md"
              key={index}
            >
              <p className="title font-bold">{item.title} </p>
              <p className="text-md mt-2">{item.desc} </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ChannelCard;
