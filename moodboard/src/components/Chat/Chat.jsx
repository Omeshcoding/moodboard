import { X, Plus, Smile } from 'lucide-react';
import SingleMessage from './SingleMessage';
import Receiver from './Receiver';
import Sender from './Sender';

import { IoSend } from 'react-icons/io5';

const Chat = () => {
  const messages = [
    {
      title: 'Couple-to-guests',
      desc: 'The weather will be perfect for th...',
      time: '9:41 AM',
      notification: '0',
    },
    {
      title: 'Couple-to-Organizer',
      desc: 'Here’re my latest drone shots',
      time: '9:16 AM',
      notification: '80',
    },
    {
      title: 'Organizer-to-Vendor',
      desc: 'I’ve been there!',
      time: 'Thursday',
      notification: '0',
    },
    {
      title: 'Couple-to-Guests',
      desc: 'Next time it’s my turn!',
      time: '12/22/21',
      notification: '0',
    },
  ];

  return (
    <article className="    text-center h-[100vh] w-full flex overflow-y-scroll">
      <aside className=" w-[40%] h-[100vh] overflow-y-scroll pt-4 px-4 flex flex-col gap-8 text-white ">
        <div className=" flex h-12 gap-4 w-full">
          <span className="mt-2">
            <X color="gray" size="2rem" />{' '}
          </span>
          <input
            type="text"
            placeholder="Search"
            className="text-black bg-white border-2 border-gray-500 rounded-full w-[80%] pl-8"
          />
        </div>
        <div className="w-full">
          {messages.map((item, index) => (
            <SingleMessage
              key={index}
              title={item.title}
              desc={item.desc}
              time={item.time}
              notification={item.notification}
            />
          ))}
        </div>
      </aside>
      <section className="w-[65%] ">
        <div className=" fixed flex flex-wrap  justify-center sm:justify-start items-center px-4 py-2">
          <div className="relative">
            <img
              src="/Avatar.png"
              height={80}
              width={70}
              alt="profileimage"
              className=" rounded-full border-2 border-darkerGray"
            />
            <span className="absolute bg-green-500 h-3 top-0 right-2 w-3 rounded-full" />
          </div>
          <div className="text-center sm:text-left sm:ml-4 text-[16px] text-darkGray">
            <p className="text-xl text-black font-bold mb-2">
              Couple-to-guests{' '}
            </p>
          </div>
        </div>
        <div className="mt-28 overflow-y-scroll h-[80vh]">
          <Receiver
            message="Who was that philosopher you
shared with me recently?"
          />
          <Sender message="Roland Barthes" />
          <Receiver message="That’s him!" />
          <Receiver message="What was his vision statement?" />
          <Sender
            message="“Ultimately in order to see a
photograph well, it is best to
look away or close your eyes.”"
          />
          <Sender
            imgUrl="/Aerial.png"
            message="Aerial photograph from the Helsinki urban environment division."
          />
          <Receiver
            senderImg="/Aerial.png"
            senderProfileImg="/Avatar.png"
            message="Aerial photograph from the Helsinki urban environment division"
            caption="Check this https://dribbble.com"
          />
          <Receiver imgUrl="./Martian.png" />
        </div>
        <div className=" fixed bottom-0 h-20 w-[60%] bg-white py-2 gap-3 px-4 items-center flex ">
          <Plus size="2.4rem" color="gray" strokeWidth={2} />
          <input
            type="text"
            placeholder="Type your message"
            className="mx-auto w-[80%] h-14 text-lg border-2 border-[#E9EAED] rounded-full px-8"
          />
          <Smile size="2rem" color="gray" />
          <span className="bg-[#B4B7BB] rounded-full p-3">
            <IoSend
              size={34}
              strokeWidth={2.1}
              color="white"
              className="pl-1"
            />
          </span>
        </div>
      </section>
    </article>
  );
};

export default Chat;
