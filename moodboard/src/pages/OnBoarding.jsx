import { Link } from 'react-router-dom';

const OnBoarding = () => {
  return (
    <section className="onboarding px-4 h-[100vh]">
      <h2 className="get_started_title">Welcome to SubhMangalPlanning!</h2>
      <p className="text-sm max-md:w-[300px]">
        Plan and manage your events effortlessly with our comprehensive toolkit.
      </p>
      <Link to="/login">
        <button className="get_started_btn">Get Started</button>
      </Link>
    </section>
  );
};

export default OnBoarding;
