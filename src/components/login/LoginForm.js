import React from "react";
import "./loginForm.css";
import Logo from "../company logo/Logo";
import {useNavigate} from 'react-router-dom'


function LoginForm() {
  const navigate = useNavigate();
  return (
    <div className="login-form-container col-3 card">
      <div className="card-body">
        <div className="card-title">
          <span>Welcome</span>
          <Logo />
        </div>

        <form>
          <label className="form-label col-12">
            <div className="input-group input-group-lg">
              <input
                className="form-control"
                placeholder="Username/Email ID*"
              />
            </div>
          </label>
          <label className="form-label col-12">
            <div className="input-group input-group-lg">
              <input className="form-control" type="password" placeholder="Password*" />
            </div>
          </label>
          <div className="other-field">
            <label>
              <input className="form-check-input" type="checkbox" />
              Remember me
            </label>
            <span>Forgot Password?</span>
          </div>
            <input className="btn submit-btn" type="submit" value="LOG IN" />
            <div className="new-user" ><span>New User?</span><span onClick={() => navigate('/register')}>Join DigiComp+</span></div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
