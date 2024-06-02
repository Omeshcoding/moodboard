import Receiver from '../components/Chat/Receiver';
import Sender from '../components/Chat/Sender';
import { ArrowLeft, Menu, Plus, Smile, X } from 'lucide-react';
import { IoSend } from 'react-icons/io5';
import PriestProfile from '../components/PriestProfile';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RitualsAI = () => {
  const [show, setShow] = useState(false);
  const [sendMessage, setSendMessage] = useState('');
  const [message, setMessage] = useState([]);
  const [chatType, setChatType] = useState({
    type: null,
    name: 'Shastri Vedaraman',
    imgUrl: '/ritualsmain.png',
  });
  const [error, setError] = useState('');

  const handleChatType = async (type) => {
    setChatType(type);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!chatType) {
      setError('Please Select your Priest');
      setTimeout(() => {
        setError('');
      }, 5000);
      return;
    }
    const newMessage = { text: sendMessage, sender: 'user' };
    setMessage((prevMessages) => [...prevMessages, newMessage]);
    setSendMessage('');
    try {
      const response = await axios.post(
        `https://shubh-manglam-planning.vercel.app/api/chat/${chatType.type}`,
        { message: sendMessage }
      );
      const receivedMessage = { text: response.data.answer, sender: 'api' };
      setMessage((prevMessages) => [...prevMessages, receivedMessage]);
    } catch (error) {
      console.error('Error sending message');
    }
  };

  return (
    <article className="text-center h-[100vh] w-full flex overflow-y-scroll">
      <button
        type="button"
        className={`mt-5 bg-[#770C15] p-3 rounded-md fixed sm:right-10 right-2 md:hidden z-50 ${
          !show && 'text-[#ede8e8]'
        }`}
        onClick={() => setShow(!show)}
      >
        {!show ? <Menu color="#ede8e8" /> : <X color="#ede8e8" />}
      </button>

      <aside
        className={`max-md:fixed  w-[60%] md:w-[30%] h-[100vh] overflow-y-scroll pt-8   flex-col gap-8 text-white bg-white ${
          show ? 'translate-x-0 fixed' : 'max-md:translate-x-[-100%]  block'
        } transition-all duration-300 z-40`}
      >
        <div className="bg-white  flex items-center py-1 mb-4 gap-4 w-full px-2">
          <Link to="/dashboard" className="text-xl">
            <ArrowLeft color="gray" />{' '}
          </Link>
          <p className="text-gray-500  w-[80%] pl-2 font-semibold text-sm md:text-lg">
            Choose your own AI Pandit
          </p>
        </div>
        <div className="w-full bg-[#770C15] h-full pt-10">
          <PriestProfile
            imgUrl="/rituals1.png"
            name="Shastri Vedaraman"
            type="hindu"
            chatType={chatType}
            messageType={handleChatType}
          />
          <PriestProfile
            imgUrl="/rituals2.png"
            type="christian"
            name="Pastor Jason"
            chatType={chatType}
            messageType={handleChatType}
          />

          <PriestProfile
            imgUrl="/priest3.png"
            type="muslim"
            name="Imam Ibrahim"
            chatType={chatType}
            messageType={handleChatType}
          />
        </div>
      </aside>

      <section className="overflow-y-scroll max-md:w-[100%] md:w-[70%] h-[100%] bg-gradient-to-b to-[#770C15]  from-[#FDF0D5] self-stretch pt-20 pb-40">
        <div className="  flex flex-col  justify-center  items-center px-4 py-2 ">
          {error && (
            <p className="font-bold uppercase text-xl bg-[#FDF0D5] w-[400px] rounded-sm py-4 text-[#770C15]">
              {error}
            </p>
          )}
          <img
            src={chatType.imgUrl}
            height={800}
            width={400}
            alt="profileimage"
            className="mb-4"
          />
          <div className=" text-[16px] text-white text-center mb-20">
            <p className="text-xl  font-bold mb-2">{chatType.name}</p>
            <p>
              AMA about anything related to{' '}
              <span className="capitalize font-semibold">{chatType.type}</span>{' '}
              traditions, vastu and rituals{' '}
            </p>
          </div>
        </div>
        <div className=" h-[100vh]">
          {message.map((msg, index) =>
            msg.sender === 'user' ? (
              <Sender key={index} message={msg.text} timeStyle="text-black" />
            ) : (
              <Receiver key={index} message={msg.text} timeStyle="text-black" />
            )
          )}
        </div>
        <div
          className={`fixed bottom-0 h-20 w-[100%]  bg-white py-2 gap-0 z-0 px-2 md:px-4 items-center flex  `}
        >
          <Plus size="2.4rem" color="gray" strokeWidth={2} />
          <form className="relative max-md:w-[100%] w-[60%]  ">
            <input
              type="text"
              value={sendMessage}
              placeholder="Type your message"
              className="mx-auto max-md:w-[100%] w-[90%] h-10 text-sm lg:text-lg border-2 border-[#E9EAED] rounded-full px-3 md:px-8"
              onChange={(e) => setSendMessage(e.target.value)}
            />
            <span className="absolute md:right-10 right-3 top-1 xl:right-14">
              <Smile size="2rem" color="gray" />
            </span>
          </form>
          <button
            type="button"
            className="bg-[#B4B7BB] rounded-full p-3 text-lg text-[#770C15] ml-1"
            onClick={handleSendMessage}
          >
            <IoSend strokeWidth={2.1} className="pl-1" />
          </button>
        </div>
      </section>
    </article>
  );
};

export default RitualsAI;
