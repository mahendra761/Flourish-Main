import React from 'react'
import "../../Styles/signup.css"
import logoImage from "/src/assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const SignUp = () => {
  return (
    <div>

      <section>
        <div className="login-main-contain">
          <div className="login-con">
            <img src={logoImage} width="110px" height="110px" />
            <div className="login-title">
              <h2>Let's Open your Account</h2>
              <p>Lorem Ipsum is simply dummy text of the can be all kind</p>
            </div>
            <div action="" className='login-form'>
            <div className='login-password-la'>
              <label htmlFor="Email" className="form-label">Email</label>
              <div className="login-input1">
                <input type="email" placeholder='Enter Your Email' />
              </div>
               </div>
              <div className='login-password-la'>
              <label htmlFor="" className="form-label">Password</label>
              <div className="login-input1">
              <input type="password" placeholder='Enter Password' />
              </div>
              </div>
              <div className='login-password-la'>
              <label htmlFor="" className="form-label">Confirm Password</label>
              <div className="login-input1">
               <input type="password" placeholder='Confirm Password' />
              </div>
              </div>
              <div className="login-btn">
                <a href="">SIGN IN</a>
            </div>
              <div className='already-account-h'>
              <h2>Already have account?<a href="">signin Now</a></h2>
             
              <div className='signup-icon'>
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

export default SignUp