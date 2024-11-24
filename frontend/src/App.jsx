import React from 'react'
import Home from './home/Home'
import { Routes, Route, Navigate } from "react-router-dom";
import Shops from './shops/Shops';
import SignUp from './components/SignUp';
import { Toaster } from "react-hot-toast";
import { useAuth } from './context/AuthProvider';


const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/shop' element={authUser?<Shops/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Toaster/>
    
    </>
    

  )
}

export default App