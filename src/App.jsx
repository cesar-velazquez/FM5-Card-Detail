import { Route, Routes } from 'react-router-dom'
import './App.css'
import PublicRoutes from './components/PublicRoutes'
import { useState } from 'react'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [userLogged, setUserLogged] = useState(false)
  const [emailValue, setEmailValue] = useState("")


  return (
    <main className='sm:p-2 sm:max-w-[1200px]  sm:border-2 sm:border-gray-900/20 
    sm:m-auto sm:my-4 sm:rounded-2xl sm:z-10  '>
      <Routes>

        <Route element={<PublicRoutes userLogged={userLogged} />}>

          <Route path="/login" element={<Login
            setUserLogged={setUserLogged}
            setEmailValue={setEmailValue}
          />}
          />
        </Route>

        <Route element={<PrivateRoute userLogged={userLogged} emailValue={emailValue} />}  >
          <Route path='/' element={<Welcome
            setUserLogged={setUserLogged}
            emailValue={emailValue}
          />}
          />

        </Route>

      </Routes>
    </main>
  )
}

export default App
