import React from 'react'
import "../../Styles/Forgotpass3.css"
import logoImage from "/src/assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Forgotpass3 = () => {
  return (
    <div>

      <section>
        <div className="forgot3-main-content">
          <div className="forgot3-con">
            <img src={logoImage} width="110px" height="110px" />
            <div className="forgot3-title">
              <h2  className="no-margin">Change Password</h2>
              <p>Enter New Password and Confirm Password</p>
            </div>
            <div action="" className='forgot-3-form'>
            <div className='forgot-3l'>
              <label htmlFor="" className="form-label">Password</label>
              <div className="forgot-3">
              <input type="password" placeholder='Enter Password' />
              </div>
              </div>
              <div className='forgot-3l'>
              <label htmlFor="" className="form-label">Confirm Password</label>
              <div className="forgot-3">
               <input type="password" placeholder='Confirm Password' />
              </div>
              </div>
             
              <div className="forgot3-btn">
                <a href="">SET NEW PASSWORD</a>
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

export default Forgotpass3