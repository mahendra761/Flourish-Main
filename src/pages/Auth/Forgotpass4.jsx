import React from 'react'
import "../../Styles/Forgotpass4.css"
import logoImage from "../../assets/Flourish.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Forgotpass4 = () => {
  return (
    <div>

      <section>
        <div className="login-main-contain">
          <div className="login-con">
           
            <div className="login-title">
            <div className="login-title1">
              <h2  className="no-margin">Password Changed
              Successfully</h2>
              <p>Lorem Ipsum is simply dummy text of the is simply dummy text of the that can people can do all</p>
           
              <div className="login-btn">
                <a href="">SIGN IN NOW</a>
            </div>
            </div>
            </div>
              <div className='already-account-h'>
              <h2>Back to<a href="">Signin Page</a></h2>
             
              
               </div>
           
          </div>
        </div>




      </section>
    </div>
  )
}

export default Forgotpass4