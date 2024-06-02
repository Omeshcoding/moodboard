import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <section className="onboarding px-4 h-[100vh]">
      <h2 className="get_started_title">Coming Soon!</h2>
      <Link to="/dashboard">
        <button className="bg-white  w-[200px] sm:w-[250px] h-12 text-red-900 font-semibold rounded-md text-sm">
          Explore Other Features
        </button>
      </Link>
    </section>
  );
};

export default ComingSoon;
