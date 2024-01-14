import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/Signup'
import Forgotpass1 from './pages/Auth/forgotpass1'
import Forgotpass2 from './pages/Auth/Forgotpass2'
import Forgotpass3 from './pages/Auth/Forgotpass3'
import Forgotpass4 from './pages/Auth/Forgotpass4'
import Home from './pages/Auth/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <SignUp/>
    </>
  )
}

export default App
