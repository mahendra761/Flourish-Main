import React from 'react'
import "../../Styles/Forgotpass1.css"
import logoImage from "/src/assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Forgotpass1 = () => {
  return (
    <div>

      <section>
        <div className="forgotpss1-main-contain">
          <div className="forgot1-con">
            <img src={logoImage} width="110px" height="110px" />
            <div className="forgot1-h">
              <h2  className="no-margin">Forgot Password</h2>
              <p>Enter your mail we will send you a Code</p>
            </div>
            <div action="" className='forgot1-form'>
            <div className='forgot1-la'>
            <label htmlFor="Email" className="form-label">Email</label>
            <div className="forgot1-input">
              <input type="email" placeholder='Enter Your Email' />
            </div>
             </div>
             
              <div className="forgot1-button">
                <a href="">SEND CODE</a>
            </div>
              <div className='already-account-h'>
              <h2>Back to<a href="">Signin Page</a></h2>
             
              
               </div>
            </div>
          </div>
        </div>




      </section>
    </div>
  )
}

export default Forgotpass1