import Copyright from '../components/Copyright';
import Navbar from '../components/home/Navbar';
import { SquareUserRound } from 'lucide-react';

const TaskAllocation = () => {
  const navlinks = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Planground',
      link: '/planground',
    },
    {
      name: 'Vendors',
      link: '/taskallocation',
    },
    {
      name: 'Messages',
      link: '/messages',
    },
    {
      name: 'Contact',
      link: '/integratewp',
    },
    {
      name: <SquareUserRound size={32} />,
      link: '/integratewp',
    },
  ];
  const vendors = [
    {
      vendor: 'Catering-On Track',
      tasks: '1/6',
      bgColor: '#DCFCE7',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
    {
      vendor: 'Decoration - Pending',
      tasks: '1/6',
      bgColor: '#FCDCDC',
    },
  ];

  return (
    <section className="bg-gradient-to-t  to-[#770C15] from-[#DC897C] self-stretch  h-[100%] overflow-hidden">
      <Navbar navlinks={navlinks} />
      <div className=" bg-white mx-2 sm:w-[85%] sm:mx-auto my-10  h-auto rounded-lg p-4">
        <div className="bg-[#FDF0D5] rounded-lg px-4 lg:px-36 pt-6 pb-14">
          <p className="text-lg sm:text-2xl font-bold mb-8">
            Vendor Management
          </p>
          <div className="  w-[99%] bg-white py-4 px-6 rounded-md">
            <p className="font-bold">Vendor Overview</p>
            <div className="flex flex-nowrap gap-4  overflow-x-scroll  mt-4">
              {vendors.map((item, index) => (
                <div
                  className=" h-[100px] py-4 pl-6 text-[#166534] rounded-lg "
                  key={index}
                  style={{ background: `${item.bgColor}` }}
                >
                  <p className="w-[300px] font-bold">{item.vendor} </p>
                  <p>Tasks completed: {item.tasks} </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" bg-white mt-8 px-4 md:px-24 pt-10 pb-6 rounded-md font-semibold ">
            <p className="text-lg font-bold">Task Assignment</p>
            <div className="flex flex-col gap-2 mt-4">
              Task Name
              <input
                type="text"
                placeholder="Enter task"
                className="font-normal py-2 pl-4 outline-none border-2 border-[#D1D5DB] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              Assign to Vendor
              <input
                type="text"
                placeholder="Enter task"
                className=" font-normal py-2 pl-4 outline-none border-2 border-[#D1D5DB] rounded-md "
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              Deadline
              <input
                type="text"
                placeholder="Enter task"
                className="font-normal py-2 pl-4 outline-none border-2 border-[#D1D5DB] rounded-md"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              Priority
              <input
                type="text"
                placeholder="Enter task"
                className="font-normal py-2 pl-4 outline-none border-2 border-[#D1D5DB] rounded-md"
              />
            </div>
            <button className="btn max-md:w-full px-4 py-1 mt-4">
              Assign Task{' '}
            </button>
          </div>
        </div>
      </div>
      <Copyright />
    </section>
  );
};

export default TaskAllocation;
