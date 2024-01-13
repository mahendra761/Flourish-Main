import React from 'react'
import "../../Styles/Home.css"
import logoImage from "../../../src/assets/Flourish.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle,faFacebook, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Home = () => {
  return (
    <div>
   <section>
  <div className='Home-main'>
  <div className='Home-container'>
  <div className='Home-content'>
  <img src={logoImage} width="110px" height="110px" />

    <div className='profile-container'>
    <img src="" alt=""/>
       <div className='profile-heading'>
       <h2>Jane Doe</h2>
       <p>abcd88@gmail.com</p>
       </div>
    </div>
    <div className='Nav-container'>
    <h2><a href=''>Home</a></h2>
    <h2><a href=''>Resources</a></h2>
    <h2><a href=''>Courses</a></h2>
    <h2><a href=''>Calender</a></h2>
    <h2><a href=''>Settings</a></h2>
    
    </div>
    </div>
    <div>
    <h2><a href=''>Help & Support</a></h2>
    
    </div>

    <div>
    <h2><a href=''>Logout</a></h2>
    
    </div>
    
  </div>
  </div>      




      </section>
    </div>
  )
}

export default Home