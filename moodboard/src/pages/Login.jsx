import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
const Login = () => {
  return (
    <section className=" onboarding h-[100%] ">
      <div className="login_container rounded-lg my-20">
        <div className="title_container">
          <p className="login_title">Create your account</p>
          <Link to="#">
            <small className="links">Sign in to your account</small>
          </Link>
          <span>Or</span>
          <Link to="#">
            <small className="links">Log in to your account</small>
          </Link>
        </div>
        <form action="POST" className="form-container">
          <div className="text-left flex flex-col font-semibold gap-1">
            Name
            <input type="text" className="input_field" />
          </div>
          <div className="text-left flex flex-col font-semibold gap-1">
            Password
            <input type="password" className="input_field" />
          </div>
          <div className=" field_container flex-col items-start">
            <div className="input_radio">
              <input type="radio" />
              <small className="text-[12px]">Remember me</small>
            </div>
            <Link to="#">
              <small className="links">Forgot your password?</small>
            </Link>
          </div>
          <Link to="/createprofile">
            <button className="links_btn_full max-md:text-sm">sign in </button>
          </Link>
          <div className="sign_up_container text-red-900">
            <Link to="#">
              <button className=" sign-up_with_btn">
                <FaGoogle />{' '}
              </button>
            </Link>
            <Link to="#">
              <button className="sign-up_with_btn">
                <FaFacebookF />{' '}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
