import { Link } from 'react-router-dom';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
const Login = () => {
  return (
    <section className=" onboarding">
      <div className="login_container">
        <div className="title_container">
          <p className="login_title">Create your account</p>
          <Link to="#">
            <small className="links">sign in to your account</small>
          </Link>
          <span>Or</span>
          <Link to="#">
            <small className="links">log in to your account</small>
          </Link>
        </div>
        <form action="POST" className="form-container">
          <input type="text" className="input_field" />
          <input type="password" className="input_field" />
          <div className=" field_container">
            <div className="input_radio">
              <input type="radio" />
              <small>Remember me</small>
            </div>
            <Link to="#">
              <small className="links">Forgot your password?</small>
            </Link>
          </div>
          <Link to="/createprofile">
            <button className="links_btn_full">sign in </button>
          </Link>
          <div className="sign_up_container ">
            <Link to="#">
              <button className="bg-green-200 sign-up_with_btn">
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
