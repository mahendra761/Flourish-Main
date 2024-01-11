import React from 'react'
import "../../Styles/login.css"
import logoImage from "/src/assets/Flourish.png"
const Login = () => {
  return (
    <div>

      <section>
        <div className="login-main-contain">
          <div className="login-con">
            <img src={logoImage} width="142px" height="156px" />
            <div className="login-title">
              <h2>Welcome <span>Let's Login</span></h2>
            </div>
            <div action="" className='login-form'>
              <label htmlFor="Email" className="form-label">Email</label>
              <div className="login-input1">
                <input type="email" placeholder='Enter Your Email' />
              </div>
              <div className='login-password-la'>
              <label htmlFor="" className="form-label">Password</label>
              <div className="login-input1">

                <input type="password" placeholder='Enter Password' />
              </div>
              </div>
              <div className="login-btn">
                <a href="">SIGN IN</a>
              </div>
            </div>
          </div>
        </div>




      </section>
    </div>
  )
}

export default Login