import { X, Plus, Smile, Menu, ArrowLeft } from 'lucide-react';
import SingleMessage from './SingleMessage';
import Receiver from './Receiver';
import Sender from './Sender';

import { IoSend } from 'react-icons/io5';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [show, setShow] = useState(false);

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
    <article className="   text-center h-[100vh] w-full flex overflow-y-scroll">
      {/* <aside className=" w-[40%] h-[100vh] overflow-y-scroll pt-4 px-4 flex flex-col gap-8 text-white border-r-gray-400 border-2"> */}
      <button
        type="button"
        className={`mt-5 bg-[#770C15] p-3 rounded-md fixed sm:right-10 right-2 lg:hidden z-50 ${
          !show && 'text-[#ede8e8]'
        }`}
        onClick={() => setShow(!show)}
      >
        {!show ? <Menu color="#ede8e8" /> : <X color="#ede8e8" />}
      </button>
      <aside
        className={`max-lg:fixed  w-[74%] lg:w-[40%] h-[100vh] overflow-y-scroll pt-8   flex-col gap-8 text-white bg-white ${
          show ? 'translate-x-0 fixed' : 'max-lg:translate-x-[-100%]  block'
        } transition-all duration-300 z-40`}
      >
        <div className="bg-white  flex items-center py-1 mb-4 gap-4 w-full px-2">
          <Link to="/dashboard" className="text-xl mx-1 md:mx-4">
            <ArrowLeft color="gray" />{' '}
          </Link>
          <input
            type="text"
            placeholder="Search"
            className="text-black pl-4 h-8 md:h-12 bg-white border-2 border-gray-500 rounded-full w-[80%] "
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
      <section className="overflow-y-scroll max-lg:w-[100%] lg:w-[60%] ml-auto h-[100vh] bg-gradient-to-b to-[#770C15]  from-[#FDF0D5] self-stretch ">
        <div className=" fixed flex flex-wrap   justify-start items-center px-4 py-2 h-20 shadow-md w-full ">
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
          <div className="text-center sm:text-left ml-4 text-[16px] text-darkGray">
            <p className="md:text-xl text-black font-bold mb-2 text-lg">
              Couple-to-guests{' '}
            </p>
          </div>
        </div>
        <div className="mt-28 overflow-y-scroll h-[90vh]">
          <Receiver
            userImg="/Avatar.png"
            message="Who was that philosopher you
shared with me recently?"
          />
          <Sender message="Roland Barthes" />
          <Receiver userImg="/Avatar.png" message="That’s him!" />
          <Receiver
            userImg="/Avatar.png"
            message="What was his vision statement?"
          />
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
            userImg="/Avatar.png"
            senderImg="/Aerial.png"
            senderProfileImg="/Avatar.png"
            message="Aerial photograph from the Helsinki urban environment division"
            caption="Check this https://dribbble.com"
          />
          <Receiver userImg="/Avatar.png" imgUrl="./Martian.png" />
        </div>
        <div
          className={`fixed bottom-0 h-20 w-[100%]  bg-white py-2 gap-0 z-0 px-2 md:px-4 items-center flex  `}
        >
          <Plus size="2.4rem" color="gray" strokeWidth={2} />
          <div className="relative max-md:w-[100%] w-[60%]  ">
            <input
              type="text"
              placeholder="Type your message"
              className="mx-auto max-md:w-[100%] w-[90%] h-10 text-sm lg:text-lg border-2 border-[#E9EAED] rounded-full px-3 md:px-8"
            />
            <span className="absolute md:right-10 right-3 top-1 xl:right-14">
              <Smile size="2rem" color="gray" />
            </span>
          </div>
          <span className="bg-[#B4B7BB] rounded-full p-3 text-lg text-[#770C15] ml-1">
            <IoSend strokeWidth={2.1} className="pl-1" />
          </span>
        </div>
      </section>
    </article>
  );
};

export default Chat;
