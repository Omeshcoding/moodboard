import { Link } from 'react-router-dom';

const CreateProfile = () => {
  return (
    <section className=" onboarding h-[100%]">
      <div className="login_container rounded-lg my-20 text-left">
        <p className="login_title pl-2 md:px-6 pb-4 md:pb-8">
          Set up your profile
        </p>
        <form action="POST" className="form-container">
          <input type="text" placeholder="Full name" className="input_field" />
          <small>Select Role</small>
          <div className="sign_up_container">
            <button
              type="button"
              className="w-full bg-[#be2f2f] text-white max-md:text-md rounded-md py-2 "
            >
              Event Organizer
            </button>
            <button
              type="button"
              className="w-full bg-[#be2f2f] text-white max-md:text-md rounded-md py-2 "
            >
              Vendor{' '}
            </button>
          </div>
          <Link to="/dashboard">
            <button type="button" className="links_btn_full">
              Complete Profile{' '}
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
