import React from 'react'
import './register.css';
import {useNavigate} from 'react-router-dom'


function Register() {
  const navigate = useNavigate();
  return (
    <div className="register-form-container col-5 card">
    <div className="card-body">
      <div className="card-title">
        <h1>Register Your Company</h1>
      </div>

      <form>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input
              className="form-control"
              placeholder="Country*"
            />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Company Name*" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Register Reference Type*" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Registeration Number" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="First Name*" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Last Name*" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Email Id*" />
          </div>
        </label>
        <label className="form-label">
          <div className="input-group input-group-lg">
            <input className="form-control" type="text" placeholder="Phone Number*" />
          </div>
        </label>
        
          <input className="btn submit-btn" type="submit" value="Register" />
          <div className="new-user" ><span>Alread Registerd?</span><span onClick={() => navigate('/')}>Login</span></div>
      </form>
    </div>
  </div>
  )
}

export default Register