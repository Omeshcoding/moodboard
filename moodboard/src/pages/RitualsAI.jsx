import Receiver from '../components/Chat/Receiver';
import Sender from '../components/Chat/Sender';
import { Plus, Smile, X } from 'lucide-react';
import { IoSend } from 'react-icons/io5';
import PriestProfile from '../components/PriestProfile';

const RitualsAI = () => {
  return (
    <article className="text-center h-[100vh] w-full flex overflow-y-scroll">
      <aside className=" w-[30%] h-[100vh] overflow-y-scroll pt-8  flex flex-col gap-8 text-white bg-white">
        <div className=" flex items-center py-1 h-1 gap-4 w-full px-2">
          <span className="">
            <X color="gray" size="2rem" />{' '}
          </span>
          <p className="text-gray-500 bg-white w-[80%] pl-2 font-semibold text-lg">
            Choose your own AI Pandit
          </p>
        </div>
        <div className="w-full bg-[#770C15] h-full">
          <PriestProfile imgUrl="/rituals1.png" name="Shastri Vedaraman" />
          <PriestProfile imgUrl="/rituals2.png" name="Pastor Jason" />

          <PriestProfile imgUrl="/rituals2.png" name="Kazi Ibrahim" />
        </div>
      </aside>
      <section className="overflow-y-scroll w-[70%] h-[100vh] bg-gradient-to-b to-[#770C15]  from-[#FDF0D5] self-stretch pt-20">
        <div className="  flex flex-col  justify-center  items-center px-4 py-2">
          <div className="relative">
            <img
              src="/ritualsmain.png"
              height={800}
              width={400}
              alt="profileimage"
              className="mb-4"
            />
          </div>
          <div className=" text-[16px] text-white text-center mb-20">
            <p className="text-xl  font-bold mb-2">Shastri Vedaraman</p>
            <p>
              AMA about anything relared to Hindu traditions, vastu and rituals{' '}
            </p>
          </div>
        </div>
        <div className=" h-[100vh]">
          <Receiver
            message="Who was that philosopher you
shared with me recently?"
            timeStyle="text-black"
          />
          <Sender message="Roland Barthes" timeStyle="text-black" />
        </div>
        <div
          className={`fixed bottom-0 h-20 w-[70%] justify-center bg-white py-2 gap-3 px-4 items-center flex  `}
        >
          <Plus size="2.4rem" color="gray" strokeWidth={2} />
          <div className="relative w-[100%] selection: ">
            <input
              type="text"
              placeholder="Type your message"
              className="mx-auto w-[80%] h-14 text-lg border-2 border-[#E9EAED] rounded-full px-8"
            />
            <span className="absolute right-36 top-3">
              <Smile size="2rem" color="gray" />
            </span>
          </div>
          <span className="bg-[#B4B7BB] rounded-full p-3 text-[#770C15]">
            <IoSend size={34} strokeWidth={2.1} className="pl-1" />
          </span>
        </div>
      </section>
    </article>
  );
};

export default RitualsAI;
