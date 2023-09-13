import { Route, Routes } from 'react-router-dom'
import './App.css'
import PublicRoutes from './components/PublicRoutes'
import { useState } from 'react'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import PrivateRoute from './components/PrivateRoute'
import Page404 from './pages/Page404'
// export const nameInput = nameInput;


function App() {
  const [userLogged, setUserLogged] = useState(false)
  const [nameInput, setNameInput] = useState("")
  const [cardNumber, setCardNumber] = useState("")


  return (
    <main className='sm:p-2 sm:max-w-[1200px]  sm:border-2 sm:border-gray-900/20 
    sm:m-auto sm:my-4 sm:rounded-2xl sm:z-10  '>
      <Routes>

        <Route element={<PublicRoutes userLogged={userLogged} />}>

          <Route path="/login" element={<Login
            setUserLogged={setUserLogged}
            setNameInput={setNameInput}
            setCardNumber={setCardNumber}
            cardNumber={cardNumber}
            nameInput={nameInput}
          />}
          />
        </Route>

        <Route element={<PrivateRoute userLogged={userLogged}
          nameInput={nameInput} cardNumber={cardNumber} />}  >
          <Route path='/' element={<Welcome
            setUserLogged={setUserLogged}
            nameInput={nameInput}
            cardNumber={cardNumber}
          />}
          />

        </Route>

        <Route path='*' element={<Page404 />} />

      </Routes>
    </main>
  )  
}


export default App
