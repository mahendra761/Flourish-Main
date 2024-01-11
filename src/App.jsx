import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/Signup'
import Forgot from './pages/Auth/Forgot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Forgot/>
    </>
  )
}

export default App
