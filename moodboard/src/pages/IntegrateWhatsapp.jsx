import Copyright from '../components/Copyright';
import Navbar from '../components/home/Navbar';
import { SquareUserRound } from 'lucide-react';

const IntegrateWhatsapp = () => {
  const navlinks = [
    'Dashboard',
    'Planground',
    'Vendors',
    'Messages',
    'Contact',
    // eslint-disable-next-line react/jsx-key
    <SquareUserRound size={32} />,
  ];
  return (
    <section className="bg-gradient-to-t  to-[#770C15] from-[#DC897C] self-stretch  h-[100%]">
      <Navbar navlinks={navlinks} />
      <div className="mx-auto mt-12 h-auto w-[70%] bg-white flex flex-col rounded-lg">
        <div className="flex shadow-sm  py-8 px-8 bg-zinc-100 mt-4 mx-4">
          <div className="">
            <p className="text-2xl font-semibold mb-4">
              Integrate Whatsapp with our platform ?
            </p>
            <p className="text-sm">
              At Dream Day, we understand that your wedding day is one of the
              most important days of your life. Our team of expert wedding
              planners is dedicated to making your dream wedding a reality,
              saving you time and providing you with exclusive vendor deals.
            </p>
          </div>
          <div className="  flex flex-col  justify-center  items-center px-4 py-2">
            <img
              src="/whatsapp.png"
              height={800}
              width={400}
              alt="profileimage"
              className="mb-4"
            />
          </div>
        </div>
        <div className="pt-10 bg-[#CEFFD7] rounded-bl-lg rounded-br-lg mx-4 mb-4 pb-4">
          <p className="text-xl text-center mx-auto max-w-[400px] font-bold text-[#515151] mb-10">
            Scan this code and send them to your guests, organizer, vendor etc{' '}
          </p>
          <div className="  flex flex-col  justify-center  items-center px-4 py-2">
            <img
              src="/qr.jpg"
              height={800}
              width={400}
              alt="profileimage"
              className="mb-4"
            />
          </div>
        </div>
      </div>
      <Copyright />
    </section>
  );
};

export default IntegrateWhatsapp;
