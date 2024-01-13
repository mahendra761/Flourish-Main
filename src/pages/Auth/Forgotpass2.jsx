import React from 'react'
import "../../Styles/Forgotpass2.css"
import logoImage from "/src/assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Forgotpass2 = () => {
  return (
    <div>

      <section>
        <div className="forgot2-main-content">
          <div className="forgot2-con">
            <img src={logoImage} width="110px" height="110px" />
            <div className="forgot2-title">
              <h2  className="no-margin">Enter verification code</h2>
              <p>We have sent a verification code to your email</p>
            </div>
            <div action="" className='login-form'>
            <div class="otp-field">
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
            <input type="text" maxlength="1" />
        </div>
             <div className='already-account-h'> 
             <h2>Didn’t Receive Code?<a href="">Resend</a></h2></div>
              <div className="forgot1-btn">
                <a href="">SEND CODE</a>
            </div>
              <div className='already-account-h'>
              <h2>Back to<a href="">Change Email</a></h2>
             
              
               </div>
            </div>
          </div>
        </div>




      </section>
    </div>
  )
}

export default Forgotpass2