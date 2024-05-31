import { Link } from 'react-router-dom';

const CreateProfile = () => {
  return (
    <section className=" onboarding">
      <div className="login_container">
        <p className="login_title">Set up your profile</p>
        <form action="POST" className="form-container">
          <input type="text" placeholder="Full name" className="input_field" />
          <small>Role</small>
          <div className="sign_up_container">
            <button className="links_btn_full">Event Organizer</button>
            <button className="links_btn_full">Vendor </button>
          </div>
          <Link to="#">
            <button className="links_btn_full">Complete Profile </button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default CreateProfile;
