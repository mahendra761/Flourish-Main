import React from 'react'
import "../../Styles/login.css"
import logoImage from "/src/assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Login = () => {
  return (
    <div>

      <section>
        <div className="login-main-container">
          <div className="login-con1">
            <img src={logoImage} width="100px" height="100px" />
            <div className="login-h">
              <h2>Let's Get you<span> Login</span></h2>
            </div>
            <div action="" className='login-for'>
            <div className='login-password-login'>
              <label htmlFor="Email" className="form-label">Email</label>
              <div className="login-input2">
                <input type="email" placeholder='Enter Your Email' />
              </div>
              </div>
              <div className='login-password-login'>
              <label htmlFor="" className="form-label">Password</label>
              <div className="login-input2">

                <input type="password" placeholder='Enter Password' />
              </div>
              </div>
              <div className='login-forgot-pass'>
              <a href="">Forgot Password</a>
              </div>
              <div className="login-button">
                <a href="">SIGN IN</a>
              </div>
              <div className='already-inlogin'>
              <h2>New User?<a href="">signup Now</a></h2>
             
              <div className='login-icon'>
              <a href=""><FontAwesomeIcon icon={faGoogle} style={{color: "#ff9d4d",}} /></a>
              <a href=""><FontAwesomeIcon icon={faFacebook}  style={{color: "#078df2",}} /></a>
              <a href=""><FontAwesomeIcon icon={faLinkedin} style={{color: "#078df2",}} /></a>
              </div>
               </div>
            </div>
          </div>
        </div>




      </section>
    </div>
  )
}

export default Login