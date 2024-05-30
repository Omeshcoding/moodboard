import { X } from 'lucide-react';
import SingleMessage from './SingleMessage';

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
    </article>
  );
};

export default Chat;
